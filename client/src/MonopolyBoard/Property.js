import React from 'react'
import './../css/tiles.css'
export default function Property(props) {
    
    let color = "color-bar"+" "+props.colorGroup;
    // let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle={backgroundColor:"#D0E8E8"};
    let players=props.players;
    for(let i=0;i<players.length;i++){
      if(players[i].currentPosition==tileId){
        bgStyle={backgroundColor:players[i].pieceName};
        if(players[i].isTurn==true)break;
      }
    }
    
  return (
    <div className="property" style={bgStyle}>
      
        <div className={color}></div>
        <div className="name">{props.propertyName}</div>
        <div className="price">{props.price}</div>
    
</div>
  )
}

