import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'
import jail_image from './../images/jail.jpg'
export default function Jail(props) {
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
  return (
    <div class="jail" style={bgStyle}>
	  
        <img  className="jail_img" src={jail_image}/>
	  </div>
        
       
  )
}
