import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js"; // Ensure correct path and file extension

const router = express.Router();

router.post('/register', registerUser);
router.post('/login',loginUser);

export default router;
