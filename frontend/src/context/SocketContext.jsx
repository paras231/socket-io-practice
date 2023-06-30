import { useState, useEffect, createContext } from "react";
import { io } from "socket.io-client";

const initialState = {
  socket: null,
  data: [],
  graphData: [],
};

export const SocketContext = createContext(initialState);

export const SocketContextProvider = ({ children }) => {
  const [newSocket, setSocket] = useState(null);
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  let socket;
  useEffect(() => {
    socket = io("http://localhost:5000");

    setSocket(socket);
    socket.on("connection", () => {
      console.log("socket connected", socket);
    });
  }, []);

  useEffect(() => {
    socket?.on("data", (res) => {
      setData(res);
    });
  }, [data]);

  useEffect(() => {
    socket?.on("graphdata", (res) => {
      setGraphData(res);
    });
  }, [graphData]);

  return (
    <>
      <SocketContext.Provider
        value={{
          socket: newSocket,
          data: data,
          graphData: graphData,
        }}
      >
        {children}
      </SocketContext.Provider>
    </>
  );
};
