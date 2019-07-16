import React, { Component } from "react";
import PropTypes from "prop-types";
import Player from './Player'

export default class Scoreboard extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
    }
    render (){
        return (
        <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          <Player name="Arien" score = '5' content = ''/>
          <Player name="David" score = '3'content = '' />
          <Player name="Mimi" score = '2'content = ''/>
        </ul>
      </div>
      )
    }
    
}