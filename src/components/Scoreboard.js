import React, { Component } from "react";
import PropTypes from "prop-types";
import Player from './Player'

export default class Scoreboard extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
    }

    constructor() {
      super();

      this.state = {
        players: [
          {id : 1, name: 'Arien', score: '2'},
          {id : 2, name: 'David', score: '5'},
          {id : 3, name: 'Mimi', score: '4'},
        ]
      };
    }

    // render (){
    //     return (
    //     <div className="scoreboard">
    //     <h1>Scoreboard</h1>
    //     <ul>
    //       {this.state.players.map((player) => {
    //         return <Player name={player.name} score={player.score} key = {player.id}content = '' />
    //       })}
    //     </ul>
    //   </div>
    //   )
    // }
    render () {
        // copying the array of players because `.sort()` **mutates!**
        const players_copy = [ ...this.state.players ];
        // sorting the players
        players_copy.sort((a, b) => b.score - a.score);
        // console.log(players_copy); // <!-- add console.log's if you're not sure!
    
        return (
          <div className="scoreboard">
            <h1>Scoreboard</h1>
            <ul>
              {players_copy.map(this.renderPlayer)}
            </ul>
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
            content =''
          />
        );
    }
}