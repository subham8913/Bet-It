import React, { useEffect, useState } from 'react'
import Board from "../MonopolyBoard/Board";
import InfoBoard from '../MonopolyBoard/InfoBoard';
import Player from './Player';
import "../css/GameZone.css";
import { Navigate,useLocation } from 'react-router-dom';
 


export default function GameZone(props) {
  const location=useLocation();
  const [players,updatePlayers]=useState(location.state.PlayerObjects);
  const [currentPlayer,changeCurrentPlayer]=useState(0);
  const playersNum=location.state.PlayersNum;
  // console.log(players[0]);
//  updatePlayers(()=>{
//   players[0].balance=700;
//  })
  // updatePlayers({...players,players[0].balance : 1000})
  // let tempPlayers=players.slice();
  // tempPlayers[0].balance=700;
  // updatePlayers(tempPlayers);
  // console.log(players);
  function rollDice(amountRolled){
     let tempPlayers=players;
     let newPosition=players[currentPlayer].currentPostion+amountRolled;
     if(newPosition>40){
      tempPlayers[currentPlayer].balance+=200;
      newPosition-=40;
     }
     tempPlayers[currentPlayer].currentPostion=newPosition;
     tempPlayers[currentPlayer].balance+=20;
    
     updatePlayers(tempPlayers);
     changeCurrentPlayer((currentPlayer+1)%playersNum);
    //  changeCurrentPlayer((currentPlayer+1)%playersNum);
     console.log(tempPlayers);
   }
   
  return (
    <div className='gamezone'>
       <div className='gamezone-board'> <Board currentPlayer={currentPlayer} players={players} rollDice={rollDice} /></div>
                 <div className='gamezone-infoboard'><InfoBoard players={players} rollDice={rollDice} currentPlayer={currentPlayer} playersNum={playersNum} /></div> 
    
    </div>
  )
}


// export default class GameZone extends Component {
     
//     constructor(props) {
//         super(props);
//         console.log("State is: " + this.props.location.state);
        
//         if (typeof this.props.profile != "undefined")
//             if (typeof this.props.profile.playerObjects != "undefined")
//                 this.state = {
//                     readyToPlay: true,
//                     userObjects: this.props.profile.playerObjects,
//                     currentPlayerTurn: this.props.profile.playerObjects[0],
//                     turnCount: 0
//                 };
                
//             else 
//                 this.state = {
//                     readyToPlay: false
//                 };
//         else
//             this.state = {
//                 readyToPlay: false
//             };
//         this.rollDice = this.rollDice.bind(this);
//         this.nextPlayerTurn = this.nextPlayerTurn.bind(this);
//     }

    // nextPlayerTurn() {
    //     let currentPlayerTurn = this.state.currentPlayerTurn;
    //     let indexOfPlayer = this.state.playerObjects.indexOf(currentPlayerTurn);
    //     console.log(indexOfPlayer + " and total players: " + this.state.playerObjects.length);
    //     let numPlayers = this.state.playerObjects.length;
    //     let nextPlayerIndex = null;
    //     if (indexOfPlayer == numPlayers - 1)
    //         nextPlayerIndex = 0;
    //     else  
    //         nextPlayerIndex = indexOfPlayer + 1;
    //         console.log(this.state.playerObjects);
    //     console.log(this.state.playerObjects[nextPlayerIndex]);
    //     this.setState({currentPlayerTurn: this.state.playerObjects[nextPlayerIndex]});
    // }

    // rollDice(amountRolled) {
    //     let currentPlayerTurn = this.state.currentPlayerTurn;
    //     let indexOfPlayer = this.state.playerObjects.indexOf(currentPlayerTurn);
    //     var stateCopy = Object.assign({},this.state);
    //     let newPos = currentPlayerTurn.getCurrentPosition() + amountRolled;
    //     if(newPos>39) {
    //         currentPlayerTurn.addToBalance(200);
    //         newPos-=39;
    //     }
    //     stateCopy.playerObjects[indexOfPlayer].setCurrentPosition(newPos);
    //     stateCopy.playerObjects[indexOfPlayer].setRolled(false);
    //     this.setState(stateCopy);
    //     console.log(this.state.playerObjects);
    //     this.executeTurn(indexOfPlayer);
      
    // }
    // executeTurn(indexOfPlayer) {

    //     this.nextPlayerTurn();
    // }
//   render() {
//     return (
//       <div>
//            <div>
//                 {this.state.readyToPlay == false
//                 ? <Navigate to='/' /> 
//                 : <div className='gamezone'>
                // <div className='gamezone-board'> <Board currentPlayer={this.state.currentPlayerTurn} /></div>
                //   <div className='gamezone-infoboard'><InfoBoard userObjects={this.state.playerObjects} rollDice={this.rollDice} currentPlayer={this.state.currentPlayerTurn} /></div> 
                    
//                   </div> }
//             </div>
//       </div>
//     )
//   }
// }
