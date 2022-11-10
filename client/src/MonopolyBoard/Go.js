import React from 'react'
import './../css/tiles.css'
export default function Go(props) {
   
    let tileId=props.tileId;
    let bgStyle=null;
    let players=props.players;
    for(let i=0;i<players.length;i++){
      if(players[i].currentPosition==tileId){
        bgStyle={backgroundColor:players[i].pieceName};
        if(players[i].isTurn==true)break;
      }
    }
return (
    <div className=" space go" style={bgStyle}>
        <div className="container">
            <div className="instructions">Collect $200.00 salary as you pass</div>
            <div className="go-word">go</div>
        </div>
        <div className="arrow fa fa-long-arrow-left"></div>
    </div>
)
  
}
