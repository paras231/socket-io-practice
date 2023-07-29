import express from "express";
import { verifyUser } from "../utils/auth.js";
import { sendMessage, fetchAllmsgs } from "../controllers/message.js";
const router = express.Router();
router.post("/send", verifyUser, sendMessage);
router.get("/fetch", verifyUser, fetchAllmsgs);
export default router;
