import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "./Navbar";
import PackageShipping from "./PackageShipping";
import PackageReceipt from "./PackageReceipt";
import TracknTrace from "./TracknTrace";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/package-shipping" component={PackageShipping} />
        <Route path="/package-receipt" component={PackageReceipt} />
        <Route path="/track-n-trace" component={TracknTrace} />
        <Route exact path="/">
          <Redirect to="/package-shipping" />
        </Route>
        <Route path="*">Not found</Route>
      </Switch>
    </Router>
  );
}

export default App;
