import React, { useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Player from './Player.js';
import './../css/StartGame.css'


export default function StartGame() {
   const [playerInfo,setPlayerInfo]=useState({
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    PlayerObjects: [],
    PlayersNum: 0,
    readyToRedirect: false
   });
   const [change,setChange]=useState(false);
    // constructor(props) {
    //     super();
    //     playerInfo = {
    //         player1: '',
    //         player2: '',
    //         player3: '',
    //         player4: '',
    //         PlayerObjects: [],
    //         PlayersNum: 0,
    //         readyToRedirect: false
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
       
       
            const handleChange=(event) =>{
        
                setPlayerInfo({...playerInfo,[event.target.name]: event.target.value});
        
              };
    
   
      const navigate=useNavigate();
    const handleSubmit=(event)=> {
        event.preventDefault();
        let playersNum = 0;
        let playerObjects = [];
        if(playerInfo.player1!=='') {
            playersNum+=1;
            let player1 = new Player();
            player1.setName(playerInfo.player1);
           player1.setPieceName("red")
            playerObjects.push(player1);
        }
        if(playerInfo.player2!=='') {
            playersNum+=1;
            let player2 = new Player();
            player2.setName(playerInfo.player2);
            player2.setPieceName("green");
            playerObjects.push(player2);
        }
        if(playerInfo.player3!=='') {
            playersNum+=1;
            let player3 = new Player();
            player3.setName(playerInfo.player3);
            player3.setPieceName("yellow");
            playerObjects.push(player3);
        }
        if(playerInfo.player4!=='') {
            playersNum+=1;
            let player4 = new Player();
            player4.setName(playerInfo.player4);
            player4.setPieceName("orange");
            playerObjects.push(player4);
        }
        if(playersNum>1) {
            setPlayerInfo({
                readyToRedirect: true,
                PlayersNum: playersNum,
                PlayerObjects: playerObjects
            });
        }
        else {
            alert("Please enter atleast 2 players");
        }
    }

  
        return (
            
            < div className="startgame">
                {playerInfo.readyToRedirect && navigate("/play",{state: playerInfo})}
                <div className="Title">
                    <h1> MONOPOLY</h1>
                    <h2> India Edition</h2>
                </div>
                <div className="PlayPicker">
                    <form onSubmit={handleSubmit}>
                        <div className="Player1">
                            <label>
                                Player 1 Nickname:
                                <input type="text"  onChange={handleChange} name="player1" maxLength="14"></input>
                            </label>
                          
                        </div>
                        <div className="Player2">
                            <label>
                                Player 2 Nickname:
                                <input type="text"  onChange={handleChange} name="player2" maxLength="14"></input>
                            </label>
                          
                        </div>
                        <div className="Player3">
                            <label>
                                Player 3 Nickname:
                                <input type="text"  onChange={handleChange} name="player3" maxLength="14"></input>
                            </label>
                          
                        </div>
                        <div className="Player4">
                            <label>
                                Player 4 Nickname:
                                <input type="text"  onChange={handleChange} name="player4" maxLength="14"></input>
                            </label>
                          
                        </div>
                        
                        <div className="Submit">
                        <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }


