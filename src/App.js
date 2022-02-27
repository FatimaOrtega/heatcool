import React from "react";
import { Footer, Blog, Header, Features } from "./containers";
import { Article, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
        <div className="gradient_bg">
      <Navbar />
      <Header />
      </div>
      <Features />
      <Blog />

      <h1>Hello World</h1>
    </div>
  );
}

export default App;