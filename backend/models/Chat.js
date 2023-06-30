import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  isGroupChat: {
    type: Boolean,
    defaulr: false,
  },
});

export default mongoose.model("Chat", chatSchema);
