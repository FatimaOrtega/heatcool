import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Feature from './components/feature/features';

//Main page
ReactDOM.render(
<Router>
    <Routes>
<Route path='/' element={<App />} />
<Route path='/feature' element={<Feature />} />

</Routes>
</Router>, document.getElementById("root"));
