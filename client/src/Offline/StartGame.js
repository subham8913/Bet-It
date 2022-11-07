import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';
import Player from './Player.js';
import './../css/StartGame.css'

class StartGame extends Component {
    constructor(props) {
        super();
        this.state = {
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            PlayerObjects: [],
            PlayersNum: 0,
            readyToRedirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});

      }
    handleSubmit(event) {
        event.preventDefault();
        let playersNum = 0;
        let playerObjects = [];
        if(this.state.name1!=='') {
            playersNum+=1;
            let player1 = new Player();
            player1.setName(this.state.name1);
           player1.setPieceName("red")
            playerObjects.push(player1);
        }
        if(this.state.name2!=='') {
            playersNum+=1;
            let player2 = new Player();
            player2.setName(this.state.name2);
            player2.setPieceName("green");
            playerObjects.push(player2);
        }
        if(this.state.name3!=='') {
            playersNum+=1;
            let player3 = new Player();
            player3.setName(this.state.name3);
            player3.setPieceName("yellow");
            playerObjects.push(player3);
        }
        if(this.state.name4!=='') {
            playersNum+=1;
            let player4 = new Player();
            player4.setName(this.state.name4);
            player4.setPieceName("orange");
            playerObjects.push(player4);
        }
        if(playersNum>1) {
            this.setState({
                readyToRedirect: true,
                PlayersNum: playersNum,
                PlayerObjects: playerObjects
            });
        }
        else {
            alert("Please enter atleast 2 players");
        }
    }

    render() {
        return (

            <div className="Landing">
                {this.state.readyToRedirect &&  <Navigate to = {{
            pathname: '/play',
            state: {layersNum: this.state.PlayersNum, playerObjects: this.state.PlayerObjects}
        }}/>}
                <div className="Title">
                    <h1> MONOPOLY</h1>
                    <h2> India Edition</h2>
                </div>
                <div className="PlayPicker">
                    <form onSubmit={this.handleSubmit}>
                        <div className="Player1">
                            <label>
                                Player 1 Nickname:
                                <input type="text" value={this.state.player1} onChange={this.handleChange} name="player1" maxLength="14"></input>
                            </label>
                          
                        </div>
                        <div className="Player2">
                            <label>
                                Player 2 Nickname:
                                <input type="text" value={this.state.player2} onChange={this.handleChange} name="player2" maxLength="14"></input>
                            </label>
                          
                        </div>
                        <div className="Player3">
                            <label>
                                Player 3 Nickname:
                                <input type="text" value={this.state.player3} onChange={this.handleChange} name="player3" maxLength="14"></input>
                            </label>
                          
                        </div>
                        <div className="Player4">
                            <label>
                                Player 4 Nickname:
                                <input type="text" value={this.state.player4} onChange={this.handleChange} name="player4" maxLength="14"></input>
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
}

export default StartGame;