import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import './Header.css'
import Portfolio from './Portfolio';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route path='/' exact render={()=>{
            return <div>
                <Header />
                <Home />
              </div>
          }}/>
          <Route path='/portfolio' exact component={Portfolio}/>
          <Route path="/portfolio/:id" component={Portfolio}/>/}
       </Switch>
     </Router>
    </div>
  );
}

export default App;
