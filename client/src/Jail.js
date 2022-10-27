import React from 'react'
import './css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'
export default function Jail(props) {
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
  return (
    <div class="space corner jail" style={bgStyle}>
           <div class="just">Just</div>
			<div class="drawing">
				<div class="container">
					<div class="name">In</div>
					<div class="window">
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
						<FontAwesomeIcon className="person" icon={faFaceFrownOpen} />
					
					</div>
					<div class="name">Jail</div>
				</div>
			</div>
			<div class="visiting">Visiting</div>
        </div>
  )
}
