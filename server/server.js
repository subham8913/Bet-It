const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const login=require("./login");

app.post('/api/register');
app.post('/api/login');
app.get('/api/quote');
app.post('/api/quote');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // socket.on("join_room", (data) => {
  //   socket.join(data);
  });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });
// });

server.listen(8000, () => {
  console.log("SERVER IS RUNNING");
});