import React from 'react';
import Navbar from './../Navbar/Navbar';
import "./features.css";

const features = () => {
return (
	<>
<Navbar/>
<div className='service'>
	<div className='service-container'>
	<div className='service-title'>
	<h1>Services</h1>
	</div>
	<ul>
	<h3>
		<div className='service-left-side'>
		<li>Installation:
			<h2>
	<ul>Furnace</ul>
	<ul>Air Conditioner</ul>
	<ul>Water Heating</ul>
	<ul>Ducts</ul>
	<ul>Thermostat</ul>
	</h2>
</li>
		<li>Cleaning:
			<h2>
			<ul>Dryer</ul>np
			<ul>Duct</ul>
			<ul>Unit Maintenance</ul>
			</h2>
		</li>

		<li>Humidifier</li>
		

</div>
</h3>

</ul>
	</div>
	</div>
	</>
)
};

export default features;