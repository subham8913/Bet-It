import React from 'react'
import './css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube } from '@fortawesome/free-solid-svg-icons'
export default function CommunityChest(props) {
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
  return (
    <div className="space community-chest" style={bgStyle}>
    <div className="container">
        <div className="name">Community Chest</div>
        <FontAwesomeIcon className="drawing" icon={faCube} />
        <div className="instructions">Follow instructions on top card</div>
    </div>
</div>
  )
}
