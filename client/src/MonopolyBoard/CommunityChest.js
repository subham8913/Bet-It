import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube } from '@fortawesome/free-solid-svg-icons'
export default function CommunityChest(props) {
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
    <div className="community-chest" style={bgStyle}>
    
        <div className="name">Community Chest</div>
        <FontAwesomeIcon className="drawing" icon={faCube} />
        <div className="instructions">Follow instructions on top card</div>
    
</div>
  )
}
