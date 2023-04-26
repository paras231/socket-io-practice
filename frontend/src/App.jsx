import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

let socket;
const App = () => {
  const [data, setData] = useState([]);
  const [typing, setTyping] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [response, setResponse] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    socket = io("http://localhost:5000");
    // console.log(socket);
    socket.on("connection", () => {
      console.log("socket connected", socket);
    });
  }, []);
  // console.log(socket);
  useEffect(() => {
    socket.on("data", (newdata) => {
      // console.log(newdata);
      setData([...data, newdata]);
    });
  }, [data]);

  console.log(typing);

  useEffect(() => {
    socket.on("typing", (data) => {
      // console.log(data);
      setTyping(data);
    });
  }, [typing]);

  useEffect(() => {
    // sending input data from frontend to backend in socket
    socket.emit("userdata", userData);
  }, [userData]);

  useEffect(() => {
    socket.on("response", (res) => {
      setResponse(res);
    });
  },[response]);
  console.log(response);
  return (
    <>
      {/* <h3>socket io</h3> */}
      {/* {updated?.map((value) => {
        return (
          <>
            <h3>{value.name}</h3>
          </>
        );
      })} */}
      {/* <input type="text" placeholder={typing ? typing : "Write something"} /> */}
      <input
        type="text"
        name="name"
        value={userData.name}
        placeholder="Enter name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={userData.email}
        placeholder="Enter email"
        onChange={handleChange}
      />
      <h2>{response?.name}</h2>
      <h2>{response?.email}</h2> 
    </>
  );
};

export default App;
