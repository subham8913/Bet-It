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
export default function Board(props) {
  const players=props.players;
  // console.log(players);
  const currentPlayer=props.currentPlayer;
  // let players = players[currentPlayer].currentPosition +35;
        let player_color = "red";
  // let players=[];
  // for(let i=0;i<players.length;i++){
  //   players.push(props.players[i].currentPosition)
  // }
  // console.log(players);
  return (
    <div className="box">
      <div className="board">
        <div className="center">
          <div className="community-chest-deck">
            <h2 className="label"></h2>
            <div className="deck"></div>
          </div>
          <h1 className="title"></h1>
          <div className="chance-deck">
            <h2 className="label">Chance</h2>
            <div className="deck"></div>
          </div>
        </div>
        <Go
          propertyName="go"
          tileId={0}
          tileInstruction="Collect $200 as you pass go"
          players={players}
          player_color={player_color}
        />
        <Jail
          propertyName="Jail"
          tileId={10}
          players={players}
          player_color={player_color}
        />

        <FreeParking
          propertyName="Free Parking"
          tileId={20}
          players={players}
          player_color={player_color}
        />

        <GoToJail
          propertyName="Go to Jail"
          tileId={30}
          players={players}
          player_color={player_color}
        />
        {/* <Property propertyName="Prayagraj" tileId={1} colorGroup="green"  price="$150" players={players} player_color={player_color} /> */}
         <div className="top-row">
          <Property
            propertyName="Kanpur"
            tileId={22}
            colorGroup="red"
            price="$250"
            players={players}
            player_color={player_color}
          />
          <Chance propertyName="Chance" tileId={23} players={players} player_color={player_color}/>
          <Property
            propertyName="Prayagraj"
            tileId={24}
            colorGroup="red"
            price="$200"
            players={players}
            player_color={player_color}
          />
          <Property
            propertyName="Delhi"
            tileId={25}
            colorGroup="red"
            price="$300"
            players={players}
            player_color={player_color}
          />
           <Utility propertyName="Rail" tileId={26} price="$200" players={players} player_color={player_color}/>
          
          
          
          <Property
            propertyName="Jaipur"
            tileId={27}
            colorGroup="yellow"
            price="$350"
            players={players}
            player_color={player_color}
          />
          
          <Property
            propertyName="Goa"
            tileId={28}
            colorGroup="yellow"
            price="$200"
            players={players}
            player_color={player_color}
          />
          <Utility propertyName="Water" tileId={29} price="$200" players={players} player_color={player_color}/>
          <Property
            propertyName="Lucknow"
            tileId={30}
            colorGroup="yellow"
            price="$250"
            players={players}
            player_color={player_color}
          />
          
         
          
        </div> 
        <div className="bottom-row">
          <Property
            propertyName="Ranchi"
            tileId={9}
            colorGroup="sky-blue"
            price="$150"
            players={players}
            player_color={player_color}
          />
          
          <Property
            propertyName="Patna"
            tileId={8}
            colorGroup="sky-blue"
            price="$200"
            players={players}
            player_color={player_color}
          />
           <Chance propertyName="Chance" tileId={7} players={players} player_color={player_color}/>
          <Property
            propertyName="Guwahati"
            tileId={6}
            colorGroup="sky-blue"
            price="$225"
            players={players}
            player_color={player_color}
          />
          {/* <Utility propertyName="Rail" tileId={6} price="$200" players={players} player_color={player_color}/> */}
          <Tax propertyName="Income Tax" tileId={5} price="$100" players={players} player_color={player_color}/>
          <Property
            propertyName="Kerala"
            tileId={4}
            colorGroup="orange"
            price="$200"
            players={players}
            player_color={player_color}
          />
          <CommunityChest propertyName="Community Chest" tileId={3} players={players} player_color={player_color}/>
          <Property
            propertyName="Mumbai"
            tileId={2}
            colorGroup="orange"
            price="$350"
            players={players}
            player_color={player_color}
          />
           <Property
            propertyName="Nagpur"
            tileId={1}
            colorGroup="orange"
            price="$150"
            players={players}
            player_color={player_color}
          />
          
         
          
        </div> 
        <div className="left-column column">
          <Property
            propertyName="Ajmer"
            tileId={20}
            colorGroup="orange"
            price="$150"
            players={players}
            player_color={player_color}
          />
          
          <Property
            propertyName="Surat"
            tileId={19}
            colorGroup="orange"
            price="$250"
            players={players}
            player_color={player_color}
          />
          <CommunityChest propertyName="Community Chest" tileId={18} players={players} player_color={player_color}/>
          <Property
            propertyName="Kochi"
            tileId={17}
            colorGroup="orange"
            price="$150"
            players={players}
            player_color={player_color}
          />
          <Utility propertyName="Rail" tileId={16} price="$200" players={players} player_color={player_color}/>
          <Property
            propertyName="Mizoram"
            tileId={15}
            colorGroup="pink"
            price="$200"
            players={players}
            player_color={player_color}
          />
          
          <Property
            propertyName="Agra"
            tileId={14}
            colorGroup="pink"
            price="$250"
            players={players}
            player_color={player_color}
          />
          <Utility propertyName="Electricity" tileId={13} price="$200" players={players} player_color={player_color}/>
          <Property
            propertyName="Indore"
            tileId={12}
            colorGroup="pink"
            price="$200"
            players={players}
            player_color={player_color}
          />
          
          
          
        </div> 
        <div className="right-column column">
          <Property
            propertyName="Jalandhar"
            tileId={32}
            colorGroup="green"
            price="$150"
            players={players}
            player_color={player_color}
          />
          
          <Property
            propertyName="Gurugram"
            tileId={33}
            colorGroup="green"
            price="$250"
            players={players}
            player_color={player_color}
          />
          <CommunityChest propertyName="Community Chest" tileId={34} players={players} player_color={player_color}/>
          <Property
            propertyName="Srinagar"
            tileId={35}
            colorGroup="green"
            price="$150"
            players={players}
            player_color={player_color}
          />
          <Utility propertyName="Rail" tileId={36} price="$200" players={players} player_color={player_color}/>
          <Property
            propertyName="Bhopal"
            tileId={37}
            colorGroup="dark-blue"
            price="$200"
            players={players}
            player_color={player_color}
          />
          <Tax propertyName="Luxury Tax" tileId={38} price="$100" players={players} player_color={player_color}/>
          <Property
            propertyName="Jhansi"
            tileId={39}
            colorGroup="dark-blue"
            price="$150"
            players={players}
            player_color={player_color}
          />
          
          <Property
            propertyName="Pune"
            tileId={40}
            colorGroup="dark-blue"
            price="$250"
            players={players}
            player_color={player_color}
          />
          
          
          
        </div> 
      </div>
      <div className="information"></div>
    </div>
  );
}
