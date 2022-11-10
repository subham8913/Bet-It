import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'
import jail_image from './../images/jail.jpg'
export default function Jail(props) {
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
    <div className="jail" style={bgStyle}>
	  
        <img  className="jail_img" src={jail_image}/>
	  </div>
        
       
  )
}
