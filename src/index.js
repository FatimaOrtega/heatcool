import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Feature from './components/feature/features';
import About from './components/about/About';

//Main page
ReactDOM.render(
<Router>
    <Routes>
<Route path='/' element={<App />} />
<Route path='/feature' element={<Feature />} />
<Route path='/about' element={<About />} />

</Routes>
</Router>, document.getElementById("root"));
