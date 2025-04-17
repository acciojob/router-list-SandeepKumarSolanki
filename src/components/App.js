
import React from "react";
import {BrowserRouter as Router, Route, Link, Switch,Outlet } from "react-router-dom/cjs/react-router-dom.min";
import './../styles/App.css';
import Home from "../Component/Home";
import About from "../Component/About";


const App = () => {
  return (
    <div>
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App
