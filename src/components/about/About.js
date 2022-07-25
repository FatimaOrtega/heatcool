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
  <h1>About Us</h1> 

     <p>A-Ortega Heating & Cooling Inc. once the founder of the company was tired of working the same life as a chef. Ortega felt like he had a passion for something else but yet was not aware of what it was yet. It was until he began to help others with installation, he understood his passion of wanting to become an entrepreneur. The company continues to grow and continue giving the best customer service!</p>

     <div className='Header-BodyContainer-Left-ButtonsContainer'>
       
       </div>
       <div className="about-container">
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


// <img src={papa} />