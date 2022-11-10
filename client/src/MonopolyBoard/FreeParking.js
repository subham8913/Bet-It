import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
export default function FreeParking(props) {
    let tileId=props.tileId;
    let bgStyle=null;
    let players=props.players;
    for(let i=0;i<players.length;i++){
      if(players[i].currentPosition==tileId){
        bgStyle={backgroundColor:players[i].pieceName};
        if(players[i].isTurn==true)break;
      }
    }
return (
    <div className="free-parking" style={bgStyle}>
    <div className="free-parking-container"><div className="free">Free</div>
    <FontAwesomeIcon className="drawing" icon={faCar} />
    <i className="drawing fa fa-car"></i>
    <div className="parking">Parking</div> </div>
    
</div>

)
}
