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

    handleDelete =() =>{
        this.props.deletePlayer(this.props.id);
    }
      
    render() {
        return (
            <li className="player">
                <p className="name">{ this.props.name }</p>
                <p className="score">{ this.props.score }</p>
                <button className="plus-button" onClick={this.handleClick}>+</button>
                <button className="delete-button" onClick={this.handleDelete}>delete</button>
            </li>
        )
    }
}