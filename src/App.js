import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Nav from './components/navbar';
import Projects from './pages/Projects';
import Home from './pages/Home';


function App() {
  return (

    <Router>

      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>

    </Router>

  );
}

export default App;
