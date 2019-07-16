import React, { Component } from "react";
import PropTypes from "prop-types";
import Player from './Player';
import AddPlayer from './AddPlayer'
import './Scoreboard.css'

export default class Scoreboard extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
    }

    constructor() {
      super();

      this.state = {
        players: [
          {id : 1, name: 'Arien', score: 2},
          {id : 2, name: 'David', score: 5},
          {id : 3, name: 'Mimi', score: 4},
        ]
      };
    }
    incrementScoreOfPlayer = (id) => {
        const updatedPlayers = this.state.players.map((player) => {
          if (player.id === id) {
            return {
              ...player,
              score: player.score + 1,
             }
          } else {
            return player;
          }
        });
        this.setState({ players: updatedPlayers })
    }

    deletePlayer = (id) => {
      const deleteBut = this.state.players.filter((player)=>{
        return player.id !== id;
      })
      this.setState({ players: deleteBut })
    }
    render () {
        this.state.players.slice().sort((a, b) => b.score - a.score);
        return (
          <div className="scoreboard">
            <h1>Scoreboard</h1>
            <ul>
              {this.state.players.map(this.renderPlayer)}
            </ul>
            <AddPlayer addPlayer={this.addPlayer} />
          </div>
        );
      }
    
    renderPlayer = player => {
      return (
        <Player
          id={player.id}
          name={player.name}
          score={player.score}
          key={player.id}
          incrementScore={this.incrementScoreOfPlayer}
          deletePlayer={this.deletePlayer}
          content =''
        />
      );
    }
    addPlayer = (name) => {
      const player = {
        id: Math.round(Math.random()*100000),
        name,
        score: 0
      }
      this.setState({
        players: this.state.players.concat(player)
      })
    }
}