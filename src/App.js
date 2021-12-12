import React,{useEffect, useState} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import GameData from './components/GameData';
import Calculator from './components/Calculator';
import News from './components/News';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from '@firebase/auth';






function App() {
require('dotenv').config();
const firebase_key = process.env.REACT_APP_FIRE_BASE_KEY

const firebaseConfig = {
  apiKey: firebase_key,
  authDomain: "spreadbook-login.firebaseapp.com",
  projectId: "spreadbook-login",
  storageBucket: "spreadbook-login.appspot.com",
  messagingSenderId: "181285774033",
  appId: "1:181285774033:web:1fb40f8da5bfa481031bf0",
  measurementId: "G-QDN5B4M8PC"
};






initializeApp(firebaseConfig);

const [user,setUser] = useState(null);

useEffect(() => {
  //console.log(process.env);
  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    setUser(user);
  })
}, [])






return (
  <Router>
  <div className='App'>
    <div className="content">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/data">
            <Nav/>
            <GameData/>
        </Route>
        <Route path="/news">
          <Nav/>
          <News/>
        </Route>
        <Route path="/calculator">
          <Nav/>
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
