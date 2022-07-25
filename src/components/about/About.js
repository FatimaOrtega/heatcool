import React from 'react';
import Navbar from './../Navbar/Navbar';
import papa from "../../assets/papa.jpeg";
import blue from "../../assets/blue.svg";
import red from "../../assets/red.svg";
import '../../containers/header/header.css';
import '../feature/features.css';
import "./About.css";

const About = () => {
return (
	<>
<Navbar/>
<div className='Header'>
  <div className='Header-BodyContainer'>
   <div className='Header-BodyContainer-Left'>
     <h1> 
      Chicago Land's Family Company
     </h1>

     <p>Provides the best experience for Heating & Cooling services. Our team is committed to give the best customer satisfaction, we guarantee to give the best service!</p>
     
     <div className='Header-BodyContainer-Left-ButtonsContainer'>
      
       </div>
       <div className="Header-van">
       <img src={papa} />
         </div>
     </div>

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

    </div>
 


 </div>

    
	</>
)
};

export default About;
