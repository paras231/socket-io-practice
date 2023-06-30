import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import chatRoute from "./routes/chat.js";
const PORT = 5000;
const app = express();

const server = http.createServer(app);

app.use(express.json({ limit: "500mb" }));
app.use(cors());
app.use("/api/chat", chatRoute);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const testData = [
  {
    name: "Paras",
    email: "sharma@gmail.com",
  },
  {
    name: "Lokesh",
    email: "lokesh@gmail.com",
  },
  {
    name: "Jayesh",
    email: "jayesh@gail.com",
  },
  {
    name: "Ajay",
  },
];

function sendData() {
  return {
    user: {
      userName: "Paras Sharma",
    },
  };
}

let response = {};

io.on("connection", (socket) => {
  console.log("user connected");
  console.log(socket.id);
  socket.emit("data", testData);

  const typing = "user is not  typing...";

  socket.emit("typing", typing);

  socket.on("userdata", (data) => {
    // this data will come from frontend
    response = data;
    console.log(response);
    // send this received response to client again->
    socket.emit("response", response);
  });

  socket.on("newdata", (res) => {
    console.log(res);
  });

  socket.on("disconnect", () => {
    console.log("user left");
  });
});

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
