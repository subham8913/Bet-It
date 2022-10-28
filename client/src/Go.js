import React from 'react'
import './css/tiles.css'
export default function Go(props) {
   
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
return (
    <div className="space corner go" style={bgStyle}>
        <div className="container">
            <div className="instructions">Collect $200.00 salary as you pass</div>
            <div className="go-word">go</div>
        </div>
        <div className="arrow fa fa-long-arrow-left"></div>
    </div>
)
  
}
