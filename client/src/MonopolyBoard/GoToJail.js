import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel  } from '@fortawesome/free-solid-svg-icons'
export default function GoToJail(props) {
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
return (
    <div class="go-to-jail container" style={bgStyle}>
        <div class="name">Go To</div>
        <FontAwesomeIcon className="drawing" icon={faGavel} />
        <i class="drawing fa fa-gavel"></i>
        <div class="name">Jail</div>
    </div>

)
}
