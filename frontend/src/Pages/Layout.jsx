import React from "react";
import Sidebar from "../components/Sidebar";
import ChatListBar from "../components/ChatListBar";
import "react-modern-drawer/dist/index.css";
import SingleChat from "../components/SingleChat";
const Layout = () => {
  return (
    <>
      <div className="flex flex-col">
        <Sidebar />
        <section className="flex justify-around">
          <ChatListBar />

          <SingleChat />
        </section>
      </div>
    </>
  );
};

export default Layout;
