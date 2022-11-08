import React from 'react';
import './../css/InfoBoard.css'
import playerImage from './../images/player.jpg'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'


export default function InfoBoard(props) {

  function rollDoneCallback(num) {
    ReactDice.rollDice(num);
  }
  function rollAll() {
    props.currentPlayer.setRolled(true);
    ReactDice.rollAll();
    console.log("hi");
  }
  return (
    <div className='InfoBoard'>
    <div className='player1'>
       <div className='playerInfo'>
          <img  className='playerImg' src={playerImage}/>
          <div className='playerName'>{props.players[0].name}</div>
          <div className='amount'>
            {props.players[0].balance}
          </div>
       </div>
    </div>
    <div className='player2'>
    <div className='playerInfo'>
          <img  className='playerImg' src={playerImage}/>
          <div className='playerName'> {props.players[1].name}</div>
          <div className='amount'>
          {props.players[1].balance}
          </div>
       </div>
    </div>
   {
    props.playersNum>=3 && 
    <div className='player3'>
    <div className='playerInfo'>
          <img  className='playerImg' src={playerImage}/>
          <div className='playerName'> {props.players[2].name}</div>
          <div className='amount'>
          {props.players[2].balance}
          </div>
       </div>
    </div>
   }
   
  {
    props.playersNum==4 && 
    <div className='player4'>
    <div className='playerInfo'>
          <img  className='playerImg' src={playerImage}/>
          <div className='playerName'>{props.players[3].name}</div>
          <div className='amount'>
          {props.players[3].balance}
          </div>
       </div>
    </div>
  }
   
     
    
  
     
    
    
   
    
    <div className='dice'>
        <ReactDice
          numDice={2}
          rollDone={rollDoneCallback}
                  // ref={dice => ReactDice = dice}
                  faceColor="green"
                  dotColor="black"
                  disableIndividual={true}
        />
        <button onClick={rollAll} >Roll</button>
    </div>
    
  </div>
  )
}


