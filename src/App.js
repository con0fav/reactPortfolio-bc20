import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Header from './components/jumbotron';
import About from './components/about';


function App() {
  return (

    <Router>

      <div className="container">
        <Header />
        <About />
      </div>

    </Router>

  );
}

export default App;
