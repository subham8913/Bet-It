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
            propertyName="Kanpur"
            tileId={22}
            colorGroup="red"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          <Chance propertyName="Chance" tileId={23} player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Prayagraj"
            tileId={24}
            colorGroup="red"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          <Property
            propertyName="Delhi"
            tileId={25}
            colorGroup="red"
            price="$300"
            player_pos={player_pos}
            player_color={player_color}
          />
           <Utility propertyName="Rail" tileId={26} price="$200" player_pos={player_pos} player_color={player_color}/>
          
          
          
          <Property
            propertyName="Jaipur"
            tileId={27}
            colorGroup="yellow"
            price="$350"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Goa"
            tileId={28}
            colorGroup="yellow"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          <Utility propertyName="Water" tileId={26} price="$200" player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Lucknow"
            tileId={1}
            colorGroup="yellow"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          
         
          
        </div> 
        <div className="bottom-row">
          <Property
            propertyName="Ranchi"
            tileId={10}
            colorGroup="sky-blue"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Patna"
            tileId={9}
            colorGroup="sky-blue"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
           <Chance propertyName="Chance" tileId={23} player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Guwahati"
            tileId={1}
            colorGroup="sky-blue"
            price="$225"
            player_pos={player_pos}
            player_color={player_color}
          />
          <Utility propertyName="Rail" tileId={6} price="$200" player_pos={player_pos} player_color={player_color}/>
          <Tax propertyName="Income Tax" tileId={38} price="$100" player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Kerala"
            tileId={4}
            colorGroup="orange"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          {/* <CommunityChest propertyName="Community Chest" tileId={3} player_pos={player_pos} player_color={player_color}/> */}
          <Property
            propertyName="Mumbai"
            tileId={2}
            colorGroup="orange"
            price="$350"
            player_pos={player_pos}
            player_color={player_color}
          />
           <Property
            propertyName="Nagpur"
            tileId={3}
            colorGroup="orange"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
         
          
        </div> 
        <div className="left-column column">
          <Property
            propertyName="Ajmer"
            tileId={20}
            colorGroup="orange"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Surat"
            tileId={19}
            colorGroup="orange"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          <CommunityChest propertyName="Community Chest" tileId={3} player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Kochi"
            tileId={17}
            colorGroup="orange"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          <Utility propertyName="Rail" tileId={15} price="$200" player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Mizoram"
            tileId={15}
            colorGroup="pink"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Agra"
            tileId={14}
            colorGroup="pink"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          <Utility propertyName="Electricity" tileId={13} price="$200" player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Indore"
            tileId={12}
            colorGroup="pink"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          
          
        </div> 
        <div className="right-column column">
          <Property
            propertyName="Jalandhar"
            tileId={32}
            colorGroup="green"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Gurugram"
            tileId={33}
            colorGroup="green"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          <CommunityChest propertyName="Community Chest" tileId={3} player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Srinagar"
            tileId={1}
            colorGroup="green"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          <Utility propertyName="Rail" tileId={15} price="$200" player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Bhopal"
            tileId={37}
            colorGroup="dark-blue"
            price="$200"
            player_pos={player_pos}
            player_color={player_color}
          />
          <Tax propertyName="Luxury Tax" tileId={38} price="$100" player_pos={player_pos} player_color={player_color}/>
          <Property
            propertyName="Jhansi"
            tileId={39}
            colorGroup="dark-blue"
            price="$150"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          <Property
            propertyName="Pune"
            tileId={40}
            colorGroup="dark-blue"
            price="$250"
            player_pos={player_pos}
            player_color={player_color}
          />
          
          
          
        </div> 
      </div>
      <div className="information"></div>
    </div>
  );
}
