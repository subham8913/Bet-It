import "./../css/tiles.css";
import React from "react";
import Property from "./Property";
import Go from "./Go";
import GoToJail from "./GoToJail";
import FreeParking from "./FreeParking";
import Jail from "./Jail";
import Utility from "./Utility";
import Tax from "./Tax";
import Chance from "./Chance";
import CommunityChest from "./CommunityChest";
export default function Board() {
  let player_pos = 133;
  let player_color = "red";

  return (
    <div class="box">
      <div className="board">
        <div className="center">
          <div class="community-chest-deck">
            <h2 class="label"></h2>
            <div class="deck"></div>
          </div>
          <h1 class="title"></h1>
          <div class="chance-deck">
            <h2 class="label">Chance</h2>
            <div class="deck"></div>
          </div>
        </div>
        <Go
          propertyName="go"
          tileId={0}
          tileInstruction="Collect $200 as you pass go"
          player_pos={player_pos}
          player_color={player_color}
        />
        <Jail
          propertyName="Jail"
          tileId={10}
          player_pos={player_pos}
          player_color={player_color}
        />

        <FreeParking
          propertyName="Free Parking"
          tileId={20}
          player_pos={player_pos}
          player_color={player_color}
        />

        <GoToJail
          propertyName="Go to Jail"
          tileId={30}
          player_pos={player_pos}
          player_color={player_color}
        />
        {/* <Property propertyName="Prayagraj" tileId={1} colorGroup="green"  price="$150" player_pos={player_pos} player_color={player_color} /> */}
         <div className="top-row">
          <Property
            propertyName="Prayagraj"
            tileId={1}
            colorGroup="red"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Kanpur"
            tileId={1}
            colorGroup="red"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Patna"
            tileId={1}
            colorGroup="red"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Lucknow"
            tileId={1}
            colorGroup="yellow"
            price="$400"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Jaipur"
            tileId={1}
            colorGroup="yellow"
            price="$450"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Goa"
            tileId={1}
            colorGroup="yellow"
            price="$500"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Surat"
            tileId={1}
            colorGroup="green"
            price="$350"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Delhi"
            tileId={1}
            colorGroup="green"
            price="$400"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Bhopal"
            tileId={1}
            colorGroup="green"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
        </div> 
        <div className="bottom-row">
          <Property
            propertyName="Prayagraj"
            tileId={1}
            colorGroup="red"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Kanpur"
            tileId={1}
            colorGroup="red"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Patna"
            tileId={1}
            colorGroup="red"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Lucknow"
            tileId={1}
            colorGroup="yellow"
            price="$400"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Jaipur"
            tileId={1}
            colorGroup="yellow"
            price="$450"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Goa"
            tileId={1}
            colorGroup="yellow"
            price="$500"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Surat"
            tileId={1}
            colorGroup="green"
            price="$350"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Delhi"
            tileId={1}
            colorGroup="green"
            price="$400"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Bhopal"
            tileId={1}
            colorGroup="green"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
        </div> 
        <div className="left-column">
          <Property
            propertyName="Prayagraj"
            tileId={1}
            colorGroup="red"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Kanpur"
            tileId={1}
            colorGroup="red"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Patna"
            tileId={1}
            colorGroup="red"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Lucknow"
            tileId={1}
            colorGroup="yellow"
            price="$400"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Jaipur"
            tileId={1}
            colorGroup="yellow"
            price="$450"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Goa"
            tileId={1}
            colorGroup="yellow"
            price="$500"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Surat"
            tileId={1}
            colorGroup="green"
            price="$350"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Delhi"
            tileId={1}
            colorGroup="green"
            price="$400"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Bhopal"
            tileId={1}
            colorGroup="green"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
        </div> 
        <div className="right-column">
          <Property
            propertyName="Prayagraj"
            tileId={1}
            colorGroup="red"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Kanpur"
            tileId={1}
            colorGroup="red"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Patna"
            tileId={1}
            colorGroup="red"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Lucknow"
            tileId={1}
            colorGroup="yellow"
            price="$400"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Jaipur"
            tileId={1}
            colorGroup="yellow"
            price="$450"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Goa"
            tileId={1}
            colorGroup="yellow"
            price="$500"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Surat"
            tileId={1}
            colorGroup="green"
            price="$350"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Delhi"
            tileId={1}
            colorGroup="green"
            price="$400"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Bhopal"
            tileId={1}
            colorGroup="green"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
        </div> 
      </div>
      <div className="information"></div>
    </div>
  );
}
