import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components/Home';
import {Menu} from './components/Menu';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';
import {NavigationBar} from './components/NavigationBar'

import './index.css'
import './App.css'

function App() {
  return (
   <React.Fragment>
   <Router>
   <NavigationBar />
   <div style={{height: "80vh"}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
    </div>
    </Router>
    
   </React.Fragment>
  );
}

export default App;
