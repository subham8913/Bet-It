import { useState, useEffect } from 'react';
import './App.css';
import Board from './MonopolyBoard/Board';
import { Routes, Route } from 'react-router-dom';
import StartGame from './Offline/StartGame';
import OfflineGame from './Offline/GameZone';
import InfoBoard from './MonopolyBoard/InfoBoard';
import GameZone from './Offline/GameZone';


function App() {
  const [backendData,setBackendData]=useState([{}])
  // useEffect(() => {
  //   fetch(`/api`)
  //    .then((response) => response.json()).then(
  //     data =>{
  //       setBackendData(data)
  //     }
  //    )
  //  }, [])
  
  return (
    <div className="App">
   <GameZone/>
    </div>
  );
}

export default App;
