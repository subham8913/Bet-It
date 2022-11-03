import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
export default function Utility(props) {
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
  return (
    <div class="utility" style={bgStyle}>
    
        <div class="name">{props.propertyName}</div>
        <FontAwesomeIcon className="drawing" icon={faLightbulb}></FontAwesomeIcon>
        <div class="price">{props.price}</div>
  
</div>
  )
}
