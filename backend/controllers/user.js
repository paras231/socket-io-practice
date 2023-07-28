import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      res.json({ msg: "User already exist" });
    }
    user = await User.create({
      email,
      username,
      password,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const login  = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
