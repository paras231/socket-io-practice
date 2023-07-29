import express from "express";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";
import chatRoute from "./routes/chat.js";
import userRoute from "./routes/user.js";
import msgRoute from "./routes/message.js";
dotenv.config();

const PORT = 5000;
const app = express();

// connect to mongodb

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = http.createServer(app);

app.use(express.json({ limit: "500mb" }));
app.use(cors());
app.use("/api/chat", chatRoute);
app.use("/api/user", userRoute);
app.use("/api/msg", msgRoute);

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
    email: "jayesh@gail.cox",
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

const graphData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

  socket.emit("graphdata", graphData);
  socket.on("disconnect", () => {
    console.log("user left");
  });
});

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
