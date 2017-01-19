import React, { Component } from 'react';
import About from './About';
import Home from './Home';
import Repos from './Repos';


export default class App extends Component {
  constructor(){
     super(...arguments);
     this.state= {route: window.location.hash.substr(1)};
  }
  componentDidMount(){
       window.addEventListener("hashchange",()=>{
             this.setState({route: window.location.hash.substr(1)})
       })
  }
  render() {
    var Comp;
    switch(this.state.route){
      case "/about":
       Comp= About;
       break;
      case "/repos":
       Comp= Repos;
       break;
      default:
       Comp=Home;
    }
    return (
      <div>
      <header>App</header>
      <menu>
      <ul>
         <li><a href="#/repos">Repos</a></li>
         <li><a href="#/about">About</a></li>
      </ul>
      </menu>
      <Comp/>
      </div>
    );
  }
}
