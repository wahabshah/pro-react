import React, { Component } from 'react';
import {Link} from "react-router";
import About from './About';
import Home from './Home';
import Repos from './Repos';


export default class App extends Component {
  constructor(){
     super(...arguments);
  }
  
  render() {
    
    return (
      <div>
      <header>App</header>
      <menu>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/repos">Repos</Link></li>
      </ul>
      </menu>
      {this.props.children}
      </div>
    );
  }
}
