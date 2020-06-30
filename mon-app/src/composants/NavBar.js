import React, { Component } from 'react'

import {NavLink} from "react-router-dom";

import './NavBar.css';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar">
                    <NavLink className="lien" to="/fancyquizz">FancyQuizz</NavLink>
                    <NavLink className="lien" to="/questions">Questions: 0/10</NavLink>
                    <NavLink className="lien" to="/correct">Correct: 0</NavLink>
            </div>
         );
    }
}
 
export default NavBar;