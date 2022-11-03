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
