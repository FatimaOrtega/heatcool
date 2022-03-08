import React, { Component } from 'react';
import papa from "../../assets/papa.jpeg";
import blue from "../../assets/blue.svg";
import red from "../../assets/red.svg";
import './header.css';




const Header = () => (
  <div className='Header'>
  <div className='Header-BodyContainer'>
   <div className='Header-BodyContainer-Left'>
     <h1> 
       ChicagoLand's Proudest Family Company
     </h1>

     <p>Provides the best experience for Heating & Cooling services. Our team is committed to give the best customer satisfaction, we guarantee to give the best service!</p>
     
     <div className='Header-BodyContainer-Left-ButtonsContainer'>
       <button>Schedule Now</button>

       
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
 <div className='Header-FooterContainer'>

   </div>


 </div>

);

export default Header;