import React from 'react'
import './../css/tiles.css'
export default function Property(props) {
    
    let color = "color-bar"+" "+props.colorGroup;
    let current_player_pos=props.player_pos;
  
    let tileId=props.tileId;
    let bgStyle=null;
    if(current_player_pos===tileId){
        bgStyle={backgroundColor:props.player_color};
    }
  return (
    <div className="property" style={bgStyle}>
      
        <div className={color}></div>
        <div class="name">{props.propertyName}</div>
        <div class="price">{props.price}</div>
    
</div>
  )
}

