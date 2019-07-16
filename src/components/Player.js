import React, { Component } from "react";
import PropTypes from "prop-types";
import './Player.css'

export default class Player extends Component {
    static propTypes = {
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          score: PropTypes.number.isRequired,
          incrementScore: PropTypes.func.isRequired
    }
      
    handleClick = () => {
          this.props.incrementScore(this.props.id);
    }

    onDelete =() =>{
        this.setState((prevState) => ({
            players: prevState.players.filter(player => player.id !== id),
        }))
    }
      
    render() {
        return (
            <li className="player">
                <p className="name">{ this.props.name }</p>
                <p className="score">{ this.props.score }</p>
                <button className="plus-button" onClick={this.handleClick}>+</button>
                <button className="delete-button" onClick={this.player.onDelete(this.player.id)}>delete</button>
            </li>
        )
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
        )
      }
    
      incrementScoreOfPlayer = id => {
       // Making a new array with the same objects except for the
    //  one that should be updated,
    const updatedPlayers = this.state.players.map(player => {
        if (player.id === id) {
          // ...which we replace with a copy of the original,
          //  except for the property `score` which is incremented
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
      // Finally, we use `this.setState` to replace the players array
      this.setState({ players: updatedPlayers });
    }
}