import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Player extends Component{
    static propTypes = {
        content: PropTypes.string.isRequired,
    }
    constructor(){
        super()
        // this.props.name = '';
        // this.props.score = '';
        this.state =[name : '', score : '']
    }
    
    render(){
        return (
            <li className="player">
              <p className="name">{this.state}</p>
            </li>
        )
    }
    
}