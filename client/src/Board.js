import React from 'react'
import Property from './Property'
import GoTile from './Go';
import GoToJail from './GoToJail';
import FreeParking from './FreeParking';
import Jail from './Jail';
import Utility from './Utility';
import Tax from './Tax';
import Chance from './Chance';
import CommunityChest from './CommunityChest';
export default function Board() {
    let player_pos=1;
    let player_color="green";

  return (
    <div>
    <GoTile propertyName="start" tileId={0} tileInstruction="Collect $200 as you pass go" player_pos={player_pos} player_color={player_color}/>
       <Property propertyName="Prayagraj" tileId={8} colorGroup="light-blue"  price="$100" player_pos={player_pos} player_color={player_color} />
       <GoToJail propertyName="Go to Jail" tileId={2} player_pos={player_pos} player_color={player_color}/>
       <FreeParking propertyName="Free Parking" tileId={3} player_pos={player_pos} player_color={player_color}/>
       <Jail propertyName="Jail" tileId={4} player_pos={player_pos} player_color={player_color}/>
       <Utility propertyName="Electricity" tileId={5} price="$100" player_pos={player_pos} player_color={player_color}/>
       <Tax propertyName="Income Tax" tileId={6} price="$100" player_pos={player_pos} player_color={player_color}/>
       <Chance tileId={10} player_pos={player_pos} player_color={player_color}/>
       <CommunityChest  tileId={11} player_pos={player_pos} player_color={player_color}/>
    </div>
    
  )
}
