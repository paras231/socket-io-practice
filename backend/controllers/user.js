import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      return res.json({ msg: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(password);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return res.status(404).json({ msg: "Wrong password" });
    }
    // create jwt->
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_KEY,
      { expiresIn: "60d" }
    );
    res.json({ token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const checkUser = async (req, res) => {
  try {
    const user = req.user.id;
    res.json({ id: user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
