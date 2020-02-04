import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Order from "./Order";
import Trace from "./Trace";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/trace">
            <Trace />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">Not found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
