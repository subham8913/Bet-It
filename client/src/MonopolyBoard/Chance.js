import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
export default function Chance(props) {
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
  return (
    <div className="chance" style={bgStyle}>
    
        <div className="name">Chance</div>
        <FontAwesomeIcon className="drawing" icon={faQuestion} />
   
</div>
  )
}
