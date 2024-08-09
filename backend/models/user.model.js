import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
   fullname:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   } ,
   phoneNumer:{
    type:Number,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   role:{
    type: String,
    enum: ['student','recruiter'],
    required:true
   },
   profile:{
    bio:{type:String},
    skills: [{type:String}],
    resume:{type:String},// URL to resume file
    resumeOrignalName:{type:String},
    company:{type:mongoose.Schema.Types.ObjectId, ref:'company'},
    profilePhoto:{
        type:String,
        defaul: ""
    }
   }
},{timestamps: true} );
export const user=mongoose.model('User', userSchema);