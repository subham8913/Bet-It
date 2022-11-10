import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel  } from '@fortawesome/free-solid-svg-icons'
export default function GoToJail(props) {
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
