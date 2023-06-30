import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
const Home = () => {
  const { socket,data } = useContext(SocketContext);

  const sendData = () => {
    socket?.emit("newdata", { selected: true });
  };
  console.log(socket, "in home page");
  
console.log(data);
  
  return (
    <>
      <h1>Home page</h1>
      <button onClick={sendData}>Send</button>
    </>
  );
};

export default Home;
