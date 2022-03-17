import React from 'react';
import Navbar from './../Navbar/Navbar';
import "./Contact.css";


const Contact = () => {
return (
	<>
    <div>
<Navbar/>
</div>
    <div className='contact'>   
    <div className='contact-container'>
    <div className='contact-title'> 
	<h1>Contact Information</h1>
    </div>
    <div className='contact-info'>
    <h2>Phone Number: (773)653-3163</h2>
    <h2>Email: adalbertoortega1@gmail.com</h2>
    </div>
    <h2>Feel free to contact our company for any help that you need!</h2>
    </div> 
    </div>
	</>
)
};

export default Contact;