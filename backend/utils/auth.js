import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyUser = async (req, res, next) => {
  try {
    const token = req.header.authorization;
    if (!token) {
      return res.status(403).json({ msg: "Please login first" });
    }
    const decode = jwt.verify(token, process.env.JWT_KEY);
    console.log(decode);
    req.user = decode.id;
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
