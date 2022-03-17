import React from "react";
import { Header, Footer} from "./containers";
import { Navbar } from "./components";
import blue from "./assets/blue.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
        <div className="gradient_bg">
      <Navbar />
      <Header />
      {/* <Footer /> */}
      </div>
      
    </div>
  );
}

export default App;
