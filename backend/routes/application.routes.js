import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs,updateStatus } from "../controllers/application.controller.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

router.route("/applyJob/:id").get(isAuthenticated,applyJob);
router.route("/getAppliedJobs").get(isAuthenticated,getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated,getApplicants);
router.route("/status/:id/update").post(isAuthenticated,updateStatus);

export default router;

