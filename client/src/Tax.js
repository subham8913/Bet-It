import React from 'react'
import './css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
export default function Tax(props) {
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
    let propertyName = props.propertyName;
    let spaceClass = "space";
    if(propertyName==="Income Tax")
        spaceClass += " income-tax";
    else
        spaceClass += " super-tax";
    return (
        <div class={spaceClass} style={bgStyle}>
            <div class="container">
                <div class="name">{props.propertyName}</div>
                <FontAwesomeIcon className="drawing" icon={faGem} />
                <div class="instructions">{props.price}</div>
            </div>
        </div>
    );
}
