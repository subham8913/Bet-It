import { useState, useEffect } from 'react';
import './App.css';
import Board from './MonopolyBoard/Board';

function App() {
  // const [backendData,setBackendData]=useState([{}])
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
    <Board/>
   
   {/* {backendData.users.map((user,i) => (
   
       <p>key={i} {user}</p>
    ))}  */}
    </div>
  );
}

export default App;
