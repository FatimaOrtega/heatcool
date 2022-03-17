import React from 'react';
import Navbar from './../Navbar/Navbar';
import papa from "../../assets/papa.jpeg";
import "./About.css";

const About = () => {
return (
	<>
<Navbar/>
<div className='about'> 
	
	   
    <div className='about-container'>
    <div className='about-title'> 
	<h1>About Us</h1>
    </div>
    <div className='about-info'>
    <h2>A-Ortega Heating & Cooling Inc. once the founder of the company was tired of working the same life as a chef. Ortega felt like he had a passion for something else but yet was not aware of what it was yet. It was until he began to help others with installation, he understood his passion of wanting to become an entrepreneur. The company continues to grow and continue giving the best customer service!</h2>
   
    </div>
	
	<img src={papa} />
    </div> 
    </div>
	</>
)
};

export default About;