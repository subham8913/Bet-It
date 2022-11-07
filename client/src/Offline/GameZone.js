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
        // console.log(this.props.state.userObjects);
        // console.log(this.props.state.userObjects[0]);
        if (typeof this.props.state != "undefined")
            if (typeof this.props.state.userObjects != "undefined")
                this.state = {
                    readyToPlay: true,
                    userObjects: this.props.state.userObjects,
                    currentPlayerTurn: this.props.state.userObjects[0],
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
        let indexOfPlayer = this.state.userObjects.indexOf(currentPlayerTurn);
        console.log(indexOfPlayer + " and total players: " + this.state.userObjects.length);
        let numPlayers = this.state.userObjects.length;
        let nextPlayerIndex = null;
        if (indexOfPlayer == numPlayers - 1)
            nextPlayerIndex = 0;
        else  
            nextPlayerIndex = indexOfPlayer + 1;
            console.log(this.state.userObjects);
        console.log(this.state.userObjects[nextPlayerIndex]);
        this.setState({currentPlayerTurn: this.state.userObjects[nextPlayerIndex]});
    }

    rollDice(amountRolled) {
        let currentPlayerTurn = this.state.currentPlayerTurn;
        let indexOfPlayer = this.state.userObjects.indexOf(currentPlayerTurn);
        var stateCopy = Object.assign({},this.state);
        let newPos = currentPlayerTurn.getCurrentPosition() + amountRolled;
        if(newPos>39) {
            currentPlayerTurn.addToBalance(200);
            newPos-=39;
        }
        stateCopy.userObjects[indexOfPlayer].setCurrentPosition(newPos);
        stateCopy.userObjects[indexOfPlayer].setRolled(false);
        this.setState(stateCopy);
        console.log(this.state.userObjects);
        this.executeTurn(indexOfPlayer);
        /*console.log("Amount rolled: " + amountRolled);
        console.log(this.state.currentPlayerTurn);
        let currentPlayerTurn = this.state.currentPlayerTurn;
        let indexOfPlayer = this.state.userObjects.indexOf(currentPlayerTurn);
        let newPos = this.state.userObjects[indexOfPlayer].getCurrentPosition() + amountRolled;
        this.state.userObjects[indexOfPlayer].setCurrentPosition(newPos);
        // currentPlayerTurn: {...st.currentPlayerTurn,  currentPosition: st.currentPlayerTurn.currentPosition + amountRolled},
        // this.setState(st => ({
        //     userObjects: users
        // }));
        console.log(this.state.currentPlayerTurn);
        console.log(this.state.userObjects[0]);*/
    }
    executeTurn(indexOfPlayer) {

        this.nextPlayerTurn();
    }
  render() {
    return (
      <div>
           <div>
                {this.state.readyToPlay == true
                ? <Navigate to='/' /> 
                : <div className='gamezone'>
                <div className='gamezone-board'> <Board currentPlayer={this.state.currentPlayerTurn} /></div>
                  <div className='gamezone-infoboard'><InfoBoard userObjects={this.state.userObjects} rollDice={this.rollDice} currentPlayer={this.state.currentPlayerTurn} /></div> 
                    
                  </div> }
            </div>
      </div>
    )
  }
}
