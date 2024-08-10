import express from 'express';
import { register, updateProfile, login, logout } from '../controllers/user.controller.js';
const router=express.Router();
import isAuthenticated from '../middlewares/isAuthenticated.js';

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;