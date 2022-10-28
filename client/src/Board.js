import React from 'react'
import Property from './Property'
import Go from './Go';
import GoToJail from './GoToJail';
import FreeParking from './FreeParking';
import Jail from './Jail';
import Utility from './Utility';
import Tax from './Tax';
import Chance from './Chance';
import CommunityChest from './CommunityChest';
export default function Board() {
    let player_pos=1;
    let player_color="red";

  return (
    <div class="box">
    <div className="board">
        <div className="center">
            <div class="community-chest-deck">
                <h2 class="label">Community Chest</h2>
                <div class="deck"></div>
            </div>
            <h1 class="title">MONOPOLY</h1>
            <div class="chance-deck">
                <h2 class="label">Chance</h2>
                <div class="deck"></div>
            </div>
        </div>
        <Go propertyName="go" tileId={0} tileInstruction="Collect $200 as you pass go" player_pos={player_pos} player_color={player_color}/>
        <Jail propertyName="Jail" tileId={10} player_pos={player_pos} player_color={player_color}/>
        <div className="space corner free-parking">
                        <FreeParking propertyName="Free Parking" tileId={20} player_pos={player_pos} player_color={player_color}/>
                    </div>
    </div>
</div>
    
  )
}
