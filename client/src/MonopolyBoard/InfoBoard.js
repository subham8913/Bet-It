import React, { Component } from 'react';
import './../css/InfoBoard.css'
import playerImage from './../images/player.jpg'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
class InfoBoard extends Component {
  constructor(props) {
    super();
    this.rollDoneCallback = this.rollDoneCallback.bind(this);
    this.rollAll = this.rollAll.bind(this);
}
 render(){
  return (
    <div className='InfoBoard'>
      <div className='player1'>
         <div className='playerInfo'>
            <img  className='playerImg' src={playerImage}/>
            <div className='playerName'> Subham</div>
            <div className='amount'>
              1500
            </div>
         </div>
      </div>
      <div className='player2'>
      <div className='playerInfo'>
            <img  className='playerImg' src={playerImage}/>
            <div className='playerName'> Subham</div>
            <div className='amount'>
              1500
            </div>
         </div>
      </div>
      <div className='player3'>
      <div className='playerInfo'>
            <img  className='playerImg' src={playerImage}/>
            <div className='playerName'> Subham</div>
            <div className='amount'>
              1500
            </div>
         </div>
      </div>
      <div className='player4'>
      <div className='playerInfo'>
            <img  className='playerImg' src={playerImage}/>
            <div className='playerName'> Subham</div>
            <div className='amount'>
              1500
            </div>
         </div>
      </div>
      <div className='dice'>
          <ReactDice
            numDice={2}
            rollDone={this.rollDoneCallback}
                    ref={dice => this.reactDice = dice}
                    faceColor="green"
                    dotColor="black"
                    disableIndividual={true}
          />
          <button onClick={this.rollAll} >Roll</button>
      </div>
      
    </div>
  )
 } 
 rollDoneCallback(num) {
  this.props.rollDice(num);
}
rollAll() {
  this.props.currentPlayer.setRolled(true);
  this.reactDice.rollAll();
}
}
export default InfoBoard;
