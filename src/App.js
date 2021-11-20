import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import GameData from './components/GameData';
import TeamNews from './components/TeamNews';
import Calculator from './components/Calculator';
import MLB from './components/MLB';





function App() {

return (
  <Router>
  <div className='App'>
    <Nav/>
    <div className="content">
      <Switch>
        <Route exact path="/">
            <GameData/>
            <TeamNews/>
        </Route>
        <Route path="/MLB">
          <MLB/>
        </Route>
        <Route path="/CAL">
          <div className="cal-title">
            <h1>Moneyline Odds Payout</h1>
          </div>
        <Calculator/>
        </Route>
      </Switch>
    </div>
  </div>
</Router>
  );
}

export default App;
