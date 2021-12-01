import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import GameData from './components/GameData';
import Calculator from './components/Calculator';
import News from './components/News';
import NotFound from './components/NotFound';

// This application was created by Elvis Bueno





function App() {

return (
  <Router>
  <div className='App'>
    <Nav/>
    <div className="content">
      <Switch>
        <Route exact path="/">
            <GameData/>
        </Route>
        <Route path="/News">
          <News/>
        </Route>
        <Route path="/CAL">
          <div className="cal-title">
            <h1>Moneyline Odds Payout</h1>
          </div>
        <Calculator/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  </div>
</Router>
  );
}

export default App;
