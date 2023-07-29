import express from "express";
import { verifyUser } from "../utils/auth.js";
const router = express.Router();
import { registerUser, login, checkUser } from "../controllers/user.js";

router.post("/signup", registerUser);
router.post("/login", login);
router.get("/verify", verifyUser, checkUser);
export default router;
