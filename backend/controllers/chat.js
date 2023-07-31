import Chat from "../models/Chat.js";
import User from "../models/User.js";
export const createNewChat = async (req, res) => {
  try {
    const { userId } = req.body;
    // find chat if exist->(only single chats)
    let chat = await Chat.find({
      isGroupChat: false,
      $and: [
        {
          users: { $eq: req.user.id },
          users: { $eq: userId },
        },
      ],
    })
      .populate("users", "-password")
      .populate("lastMessage");
     chat = await User.populate(chat,{
   path:'lastMessage.sender',
   select:'username email _id'
     })
    if (chat.length > 0) {
      res.json(chat[0]);
    }
    // else create new chat->
    else {
      const createChat = await Chat.create({
        name: "sender",
        isGroupChat: false,
        users: [req.user.id, userId],
      });
      const fullChat = await Chat.findOne({
        _id: createChat._id,
      }).populate("users", "-password");
      res.json(fullChat);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
