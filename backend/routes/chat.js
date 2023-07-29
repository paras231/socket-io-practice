import express from "express";
import { verifyUser } from "../utils/auth.js";
const router = express.Router();
import { createNewChat } from "../controllers/chat.js";

router.get("/get/chat", verifyUser, createNewChat);
export default router;
