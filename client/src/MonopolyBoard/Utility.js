import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
export default function Utility(props) {
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
    <div className="utility" style={bgStyle}>
    
        <div className="name">{props.propertyName}</div>
        <FontAwesomeIcon className="drawing" icon={faLightbulb}></FontAwesomeIcon>
        <div className="price">{props.price}</div>
  
</div>
  )
}
