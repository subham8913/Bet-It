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
    <div className="go-to-jail" style={bgStyle}>
    <div className="go-to-jail-container">
    <div className="name">Go To</div>
        <FontAwesomeIcon className="drawing" icon={faGavel} />
        <i className="drawing fa fa-gavel"></i>
        <div className="name">Jail</div>
    </div>
       
    </div>

)
}
