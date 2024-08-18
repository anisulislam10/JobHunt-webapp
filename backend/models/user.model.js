// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     fullname: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     phoneNumber: {
//         type: Number,
//         required: true
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     role:{
//         type:String,
//         enum:['student','recruiter'],
//         required:true
//     },
//     profile:{
//         bio:{type:String},
//         skills:[{type:String}],
//         resume:{type:String}, // URL to resume file
//         resumeOriginalName:{type:String},
//         company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, 
//         profilePhoto:{
//             type:String,
//             default:""
//         }
//     },
// },{timestamps:true});
// export const User = mongoose.model('User', userSchema);

import mongoose from "mongoose";

// Define the profile schema separately for better modularity
const profileSchema = new mongoose.Schema({
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String }, // URL to resume file
    resumeOriginalName: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    profilePhoto: { type: String, default: "" }
}, { _id: false }); // Disable _id field for embedded schema

// Define the user schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true // Add an index for faster lookups
    },
    phoneNumber: {
        type: String, // Changed to String if phone numbers include formatting
        required: true,
        index: true // Add an index if you frequently search by phone number
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true
    },
    profile: profileSchema // Embed profile schema
}, { timestamps: true });

// Create an index for email and phoneNumber to optimize queries
userSchema.index({ email: 1, phoneNumber: 1 });

export const User = mongoose.model('User', userSchema);
