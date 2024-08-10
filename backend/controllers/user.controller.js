import { User } from ".../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (fullname || email || phoneNumber || password || role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
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
        if (email || password || role) {
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
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, samesite: 'strick' }).json({
            message: `welcome back ${user.fullname}`,
            success: true
        })

    } catch (error) {
        console.log(error);

    }
}


export const logout = async (res, req) => {
    try {
        return res.status(200).cookie("token", token, "", { maxAge: '1d' }).json({
            message: "logeedout successfully",
            success: true
        })
    }
    catch (error) {
        console.log(error);

    }
}
// update profile
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;
        if (fullname || email || phoneNumber || bio || skills) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }
    //setup cloudinary here letter


    const skillsArray= skills.split(",");
    const userId=res.id //middleware aut
    let user=await user.findById(userId);
    if(!user){
        return res.status(400).json({
            message: "user not found",
            success: false
        });
    }
    //updating data
    user.fullname=fullname,
    user.email=email,
    user.phoneNumber=phoneNumber,
    user.profile.bio=bio,
    user.profile.skills=skillsArray

    //reusme comes letter here after setup coudinary


    await user.save();
    user = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile
    }
    return res.status(200).json({
        messagr: "profile updated successfully",
        success: true
    })

    }catch (error) {

    }
}
