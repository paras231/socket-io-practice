import Chat from "../models/Chat.js";

export const createNewChat = async (req, res) => {
  try {
    const { name } = req.body;
    const chat = await Chat.create({
      name,
    });
    res.status(201).json({ message: "new chat created", chat });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
