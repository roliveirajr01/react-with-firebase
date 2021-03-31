import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Chats from '../Chats/Chats'
import TinderCards from '../TinderCard/TinderCards'
import SwipeButtons from '../SwipeButtons/SwipeButtons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginApp from '../Login/LoginApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/chat">
            <Header backButton="/"/>
            <Chats />
          </Route>

          <Route path="/login">
            <Header backButton="/"/>
            <LoginApp />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
