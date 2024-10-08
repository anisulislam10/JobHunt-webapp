import jwt from "jsonwebtoken";
console.log("***Middleware Hitted***");

console.log("***Middleware hitted from Server***");
const isAuthenticated = async (req, res, next) => {

    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated ",
                middleware_message: "***Middleware hitted***",
                server_message: "***Server is Live......***",
                

                
                success: false,
            })
            
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;
