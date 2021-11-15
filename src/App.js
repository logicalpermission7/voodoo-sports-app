import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';


function App() {

return (
  <Router>
  <div className='App'>
    <Nav/>
    <div className="content">
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/About">
            <About/>
        </Route>
      </Switch>
    </div>
  </div>
</Router>
  );
}

export default App;
