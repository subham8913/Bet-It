// import { useState, useEffect } from 'react';
// import './App.css';
// import Board from './MonopolyBoard/Board';
// import { Routes, Route } from 'react-router-dom';
// import StartGame from './Offline/StartGame';
// import OfflineGame from './Offline/GameZone';
// import InfoBoard from './MonopolyBoard/InfoBoard';
// import GameZone from './Offline/GameZone';



// function App() {
// //   const [backendData,setBackendData]=useState([{}])
// //   // useEffect(() => {
// //   //   fetch(`/api`)
// //   //    .then((response) => response.json()).then(
// //   //     data =>{
// //   //       setBackendData(data)
// //   //     }
// //   //    )
// //   //  }, [])
  
//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path="/" element={<StartGame/>}/>
//         <Route  path="/play" element={<GameZone/>} />
//       </Routes>
   
//     </div>
//   );

//   }
// import { useState, useEffect } from 'react';
// import './App.css';
// import Board from './MonopolyBoard/Board';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Register from "./login/registration";
import Dashboard from "./login/dashboard";

const App = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	);
};

// function App() {
//   // const [backendData,setBackendData]=useState([{}])
//   // useEffect(() => {
//   //   fetch(`/api`)
//   //    .then((response) => response.json()).then(
//   //     data =>{
//   //       setBackendData(data)
//   //     }
//   //    )
//   //  }, [])
//   return (
//     <div className="App">
//     <Board/>

//    {/* {backendData.users.map((user,i) => (

//        <p>key={i} {user}</p>
//     ))}  */}
//     </div>
//   );
// }


export default App;

//------------------------------------------------------------------------------------------------------------
// import "./App.css";
// import io from "socket.io-client";
// import { useEffect, useState } from "react";

// const socket = io.connect("http://localhost:8000");

// function App() {
//   //Room State
//   const [room, setRoom] = useState("");

//   // Messages States
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");

//   const joinRoom = () => {
//     if (room !== "") {
//       socket.emit("join_room", room);
//     }
//   };

//   const sendMessage = () => {
//     socket.emit("send_message", { message, room });
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, [socket]);
//   return (
//     <div className="App">
//       <input
//         placeholder="Room Number..."
//         onChange={(event) => {
//           setRoom(event.target.value);
//         }}
//       />
//       <button onClick={joinRoom}> Join Room</button>
//       <input
//         placeholder="Message..."
//         onChange={(event) => {
//           setMessage(event.target.value);
//         }}
//       />
//       <button onClick={sendMessage}> Send Message</button>
//       <h1> Message:</h1>
//       {messageReceived}
//     </div>
//   );
// }

// export default App;
