import mongoose from "mongoose";
const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("-------------------------------------");
        console.log("***MongoDB Connected Successfully***"); 
        console.log("-------------------------------------");

    } catch (error) {
        console.log(error);
    }
}
export default connectDB;