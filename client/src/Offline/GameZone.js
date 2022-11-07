import React, { Component } from 'react'
import Board from "../MonopolyBoard/Board";
import InfoBoard from '../MonopolyBoard/InfoBoard';
import Player from './Player';
import "../css/GameZone.css";
import { Navigate } from 'react-router-dom';

export default class GameZone extends Component {
    constructor(props) {
        super(props);
        console.log("State is: " + this.props.state);
        
        if (typeof this.props.state != "undefined")
            if (typeof this.props.state.playerObjects != "undefined")
                this.state = {
                    readyToPlay: true,
                    userObjects: this.props.state.playerObjects,
                    currentPlayerTurn: this.props.state.playerObjects[0],
                    turnCount: 0
                };
                
            else 
                this.state = {
                    readyToPlay: false
                };
        else
            this.state = {
                readyToPlay: false
            };
        this.rollDice = this.rollDice.bind(this);
        this.nextPlayerTurn = this.nextPlayerTurn.bind(this);
    }

    nextPlayerTurn() {
        let currentPlayerTurn = this.state.currentPlayerTurn;
        let indexOfPlayer = this.state.playerObjects.indexOf(currentPlayerTurn);
        console.log(indexOfPlayer + " and total players: " + this.state.playerObjects.length);
        let numPlayers = this.state.playerObjects.length;
        let nextPlayerIndex = null;
        if (indexOfPlayer == numPlayers - 1)
            nextPlayerIndex = 0;
        else  
            nextPlayerIndex = indexOfPlayer + 1;
            console.log(this.state.playerObjects);
        console.log(this.state.playerObjects[nextPlayerIndex]);
        this.setState({currentPlayerTurn: this.state.playerObjects[nextPlayerIndex]});
    }

    rollDice(amountRolled) {
        let currentPlayerTurn = this.state.currentPlayerTurn;
        let indexOfPlayer = this.state.playerObjects.indexOf(currentPlayerTurn);
        var stateCopy = Object.assign({},this.state);
        let newPos = currentPlayerTurn.getCurrentPosition() + amountRolled;
        if(newPos>39) {
            currentPlayerTurn.addToBalance(200);
            newPos-=39;
        }
        stateCopy.playerObjects[indexOfPlayer].setCurrentPosition(newPos);
        stateCopy.playerObjects[indexOfPlayer].setRolled(false);
        this.setState(stateCopy);
        console.log(this.state.playerObjects);
        this.executeTurn(indexOfPlayer);
      
    }
    executeTurn(indexOfPlayer) {

        this.nextPlayerTurn();
    }
  render() {
    return (
      <div>
           <div>
                {this.state.readyToPlay == false
                ? <Navigate to='/' /> 
                : <div className='gamezone'>
                <div className='gamezone-board'> <Board currentPlayer={this.state.currentPlayerTurn} /></div>
                  <div className='gamezone-infoboard'><InfoBoard userObjects={this.state.playerObjects} rollDice={this.rollDice} currentPlayer={this.state.currentPlayerTurn} /></div> 
                    
                  </div> }
            </div>
      </div>
    )
  }
}
