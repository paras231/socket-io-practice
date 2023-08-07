import React, { useState } from "react";
import GroupChatModal from "./GroupChatModal";
import { HiPlus } from "react-icons/hi";
const ChatListBar = () => {
  const [openChatModal, setOpenChatModal] = useState(false);

  const handleOpenChatModal = () => {
    setOpenChatModal(true);
  };

  const handleCloseModal = () => {
    setOpenChatModal(false);
  };

  return (
    <>
      <div className="mt-10 bg-gray-100 h-[100vh]  rounded-md p-2">
        <div className="flex justify-around">
          <span className=" text-2xl font-semibold">My Chats</span>
          <div className="flex items-center justify-center gap-4 p-1 rounded-md hover:bg-slate-400 bg-gray-200">
            <button
              onClick={handleOpenChatModal}
              className="font-medium text-xl "
            >
              New Group Chat
            </button>
            <HiPlus className="font-bold" />
          </div>
        </div>
      </div>
      <GroupChatModal open={openChatModal} handleClose={handleCloseModal} />
    </>
  );
};

export default ChatListBar;
