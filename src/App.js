import Navbar from "./Components/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "./Components/History";
import Insights from "./Components/Insights";
import Header from "./Components/Header";
import {LogProvider} from "./Context/LogContext.js";
import Login from "./Components/Login";
import Summary from "./Components/Summary";

function App() {


  return (
    <>
    <LogProvider>
    <Router>
      <div>
        <Switch>
          <Route exact path="/history">
          <Navbar />
            <History />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/insights">
          <Navbar />
            <Insights />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/home">
            <Navbar />
            <Header />
            <Summary />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

    </LogProvider>
    
    </>
    
  );
}

export default App;
