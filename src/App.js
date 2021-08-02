
import './App.css';
import Navigation from './components/Navigation';
import React from "react";
import Home from './components/Home';
import Destinations from './components/Destinations';
import About from './components/About';
import Partner from './components/Partner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Header />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/about" component={About} />
          <Route path="/partner" component={Partner} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
