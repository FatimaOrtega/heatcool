import React, {Component} from "react";
import {Button} from "../Button";
import "./Logo.css";
import logo from "./logo.png";

class Logo extends Component {
    render() {
        return (
<nav>
<h1 className="startPhase">A Chicago Family Owned Company</h1>
    <img src={logo} alt="logo" className="Logo"/>
    
</nav>
        );
        
    }
}

export default Logo;