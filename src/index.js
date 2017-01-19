import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import App from './App';
import About from './About';
import Repos from './Repos';
import Home from './Home';

ReactDOM.render(      
    (<Router history={browserHistory}>
         <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="repos" component={Repos}/>
         </Route>
    </Router>)
      , document.getElementById('root'));
