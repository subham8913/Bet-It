import React from 'react'
import './css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
export default function FreeParking(props) {
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
return (
    <div class="FreeParkingTile container" style={bgStyle}>
    <div class="name">Free</div>
    <FontAwesomeIcon className="drawing" icon={faCar} />
    <i class="drawing fa fa-car"></i>
    <div class="name">Parking</div>
</div>

)
}
