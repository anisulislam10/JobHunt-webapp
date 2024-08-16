import {Application} from "../models/application.model.js"
import { Job } from "../models/job.model.js";
export const applyJob=async (req,res)=>{
    try {
        const userId=req.id;
        // const {id:jobId}=req.params;
        const jobId = req.params.id
        if(!jobId){
            return res.status(400).json({
                message: "job ID is required",
                success: false
            })
        };
        //check if user has already applied or not for the job
        const existingApplication= await Application.findOne({job:jobId, applicant:userId});
        if(existingApplication){
            return res.status(400).json({
                message: "You have Already Applied for this job",
                success: false
            })
        }
        //check if the job exits or not
        const job = await Job.findById(jobId);
        if(!Job){
            return res.status(404).json({
                message: "Job Not Found",
                success: false
            })
        }
        //create a new application
        const newApplication= await Application.create({
          job: jobId,
          applicant: userId
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message: "Job Applied Successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}
//get all applied jobs
export const getAppliedJobs= async (req,res)=>{
    try {
        const userId=req.id;
        const application = await Application.find({applicant:userId}).sort({created:-1}).populate({
            path: "job",
            options: {sort: {createdAt: -1}},
            //nested populate to show details both job and company information
            populate:{
                path: 'company',
                options: {sort: {createdAt: -1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message: "No Application",
                success: false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}

//finds applicants, admin check how many user, students are applied for the job
export const getApplicants= async (req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options: {sort: {createdAt: -1}},
            //nested populate
            populate:{
                path: 'applicant',
                
            }
        });
        if(!job){
            return res.status(404).json({
                message: "Job Not Found",
                success: false
            })
        };
        return res.status(200).json({
            job,
            success: true
        })
    } catch (error) {
        console.log(error);  
    }
}

//update status like select, reject pending
export const updateStatus= async (req,res)=>{
    try {
        const {status}=req.body;
        const applicationId=req.params.id;
        if(!status){
            return res.status(404).json({
                message: "Status is Required",
                success: false
            })
        };
        //find the application by applicantion ID
        const application = await Application.findOne({_id:applicationId});
        if (!application){
            return res.status(404).json({
                message: "Application Not Found",
                success: false
            })
        };
        //update the status
        application.status=status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message: "Status Updated Successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
