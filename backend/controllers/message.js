import Message from "../models/Message.js";
import User from "../models/User.js";
import Chat from "../models/Chat.js";

export const sendMessage = async (req, res) => {
  try {
    const { message, chatId } = req.body;
    let msg = await Message.create({
      sender: req.user.id,
      chat: chatId,
      message: message,
    });
    msg = await msg.populate("sender", "username");
    msg = await msg.populate("chat");
    msg = await User.populate(msg, {
      path: "chat.users",
      select: "username email _id",
    });
    await Chat.findByIdAndUpdate(chatId, { lastMessage: msg }, { new: true });
    res.status(200).json({ msg });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// fetch all messages of a chat->

export const fetchAllmsgs = async (req, res) => {
  try {
    const { chatId } = req.body;
    const msgs = await Message.find({ chat: chatId })
      .populate("sender", "username email _id")
      .populate("chat");
    res.status(200).json({ msgs });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
