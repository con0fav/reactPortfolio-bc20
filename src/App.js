import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Header from './components/jumbotron';
import About from './components/about';
import Nav from './components/navbar';
import Projects from './pages/Projects';


function App() {
  return (

    <Router>

      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Header />
        <About />
      </div>

    </Router>

  );
}

export default App;
