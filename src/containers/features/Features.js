import React from 'react';
import blue from "../../assets/blue.svg";
import red from "../../assets/red.svg";
import '../header/header.css';
import './features.css';

const Features = () => {
return (

	<div className='Header-BodyContainer-Right'>  
      <div className='Header-red'>
     <img src={red}/>
     </div>
     <div className='App-bluePlacement '>
     <div className='Header-blue'>
<img src={blue}/>
</div>
</div>
     </div>
)
};

export default Features;