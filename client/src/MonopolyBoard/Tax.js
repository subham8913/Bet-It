import React from 'react'
import './../css/tiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
export default function Tax(props) {
    let tileId=props.tileId;
    let bgStyle=null;
    let players=props.players;
    for(let i=0;i<players.length;i++){
      if(players[i].currentPosition==tileId){
        bgStyle={backgroundColor:players[i].pieceName};
        if(players[i].isTurn==true)break;
      }
    }
    let propertyName = props.propertyName;
    let spaceClass = "";
    if(propertyName==="Income Tax")
        spaceClass = "income-tax";
    else
        spaceClass = "super-tax";
    return (
        <div className={spaceClass} style={bgStyle}>
            
                <div className="name">{props.propertyName}</div>
                <FontAwesomeIcon className="drawing" icon={faGem} />
                <div className="instructions">{props.price}</div>
         
        </div>
    );
}
