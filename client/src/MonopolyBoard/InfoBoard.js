import React, { Component } from 'react'
import './../css/InfoBoard.css'
import playerImage from './../images/player.jpg'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default class InfoBoard extends Component {
  constructor(props) {
    super();
    this.rollDoneCallback = this.rollDoneCallback.bind(this);
    this.rollAll = this.rollAll.bind(this);
}
  rollDoneCallback(num) {
    this.props.rollDice(num);
  }
rollAll() {

    let x=this.reactDice.rollAll();
    console.log(x);
   
}
  render() {
    return (
      <div className='InfoBoard'>
    <div className='player1'>
       <div className='playerInfo'>
          <img  className='playerImg' src={playerImage}/>
          <div className='playerName'>{this.props.players[0].name}</div>
          <div className='amount'>
            {this.props.players[0].balance}
          </div>
       </div>
    </div>
    <div className='player2'>
    <div className='playerInfo'>
          <img  className='playerImg' src={playerImage}/>
          <div className='playerName'> {this.props.players[1].name}</div>
          <div className='amount'>
          {this.props.players[1].balance}
          </div>
       </div>
    </div>
   {
    this.props.playersNum>=3 && 
    <div className='player3'>
    <div className='playerInfo'>
          <img  className='playerImg' src={playerImage}/>
          <div className='playerName'> {this.props.players[2].name}</div>
          <div className='amount'>
          {this.props.players[2].balance}
          </div>
       </div>
    </div>
   }
   
  {
    this.props.playersNum==4 && 
    <div className='player4'>
    <div className='playerInfo'>
          <img  className='playerImg' src={playerImage}/>
          <div className='playerName'>{this.props.players[3].name}</div>
          <div className='amount'>
          {this.props.players[3].balance}
          </div>
       </div>
    </div>
  }
   
     
    
  
     
    
    
   
    
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
}




