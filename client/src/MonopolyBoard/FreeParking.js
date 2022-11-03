import React from 'react'
import './../css/tiles.css'
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
    <div class="free-parking" style={bgStyle}>
    <div class="free-parking-container"><div class="free">Free</div>
    <FontAwesomeIcon className="drawing" icon={faCar} />
    <i class="drawing fa fa-car"></i>
    <div class="parking">Parking</div> </div>
    
</div>

)
}
