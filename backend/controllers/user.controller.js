import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        console.log("______________________________________");
        console.log("****Register Controller is Hitted*****", register);
        console.log("______________________________________");


        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });


        };
        console.log("______________________________________");

        console.log(`****User Already Exists With this ${email} Email*****`);
        console.log("______________________________________");
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "user already exists with this email",
                success: false,
            })

        };
        const hashPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashPassword,
            role,
        });
        console.log("______________________________________");
        console.log("****Account Created Successfully*****");
        console.log("______________________________________");


        return res.status(201).json({
            message: "account created successfully",
            success: true

        })

    } catch (error) {
        console.log(error);

    }

}


export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "someting is missing",
                success: false
            });
        };
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "incorrect email or password",
                success: false
            })
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(400).json({
                message: "incorrect email or password",
                success: false
            })
        };

        //check role is correct or not
        if (role != user.role) {
            return res.status(400).json({
                message: "account does not exists with current role",
                success: false
            })
        };
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        //store token into cookies
        console.log(`****Login Success! Welcome back to Mr. ${user.fullname}`);
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, samesite: 'strick' }).json({
            message: `welcome back ${user.fullname}`,
            success: true
        })

    } catch (error) {
        console.log(error);

    }
}


export const logout = async (req, res) => {
    try {
        // Clear the cookie by setting the token to an empty string and maxAge to 0
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while logging out",
            success: false
        });
    }
};

// update profile
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file; // File handling to be added later

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
        }

        const userId = req.id; // Ensure this is set by the middleware
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            });
        }

        // Updating fields
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;

        // Ensure user.profile exists before updating
        if (bio || skillsArray) {
            user.profile = user.profile || {};
            if (bio) user.profile.bio = bio;
            if (skillsArray) user.profile.skills = skillsArray;
        }

        await user.save();

        return res.status(200).json({
            message: "Profile updated successfully",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while updating the profile",
            success: false
        });
    }
};
