import express from "express";
import { registUser } from "../Controllers/authController.js";


const router = express.Router();

router.post("/register-user",registUser)
router.post("/login-user",loginUser)


export default router;