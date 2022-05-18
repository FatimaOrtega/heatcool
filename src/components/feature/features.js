import React from 'react';
import Navbar from './../Navbar/Navbar';
import blue from "../../assets/blue.svg";
import red from "../../assets/red.svg";
import '../../containers/header/header.css';
import './features.css';

const features = () => {
return (
	<>
<Navbar/>


<div className='services'>
  <div className='service-container'>
	  <div className= 'service-title'>
  <h1> 
      Services
     </h1>
	 <div className= 'feature-column'>
	 <div className= 'service-left-side'>
		 <ul>Installation:</ul>
		 </div>
		 </div>
		 <div className= 'rectangle'>
		 Air conditioning
		 </div>
		 <div className= 'rectangle'>
		 Furnace
		 </div>
		 <div className= 'rectangle'>
		 Water Heating
		 </div>
		 <div className= 'rectangle'>
		 Duct
		 </div>

		
		 <div className= 'service-right-side'>
		 <ul>Maintenance:</ul>
		 <div className= 'rectangle'>
		 Air conditioning
		 </div>
		 <div className= 'rectangle'>
		 Furnace
		 </div>
		 <div className= 'rectangle'>
		 Water Heating
		 </div>
		 <div className= 'rectangle'>
		 Duct
		 </div>
		 
		 
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

export default features;