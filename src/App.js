import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "./Navbar";
import ParcelShipping from "./ParcelShipping";
import ParcelReceipt from "./ParcelReceipt";
import TracknTraceShow from "./TracknTraceShow";
import TracknTraceFind from "./TracknTraceFind";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/parcel-shipping" component={ParcelShipping} />
        <Route path="/parcel-receipt" component={ParcelReceipt} />
        <Route path="/track-n-trace/:id" component={TracknTraceShow} />
        <Route path="/track-n-trace" component={TracknTraceFind} />
        <Route path="*">
          <Redirect to="/parcel-shipping" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
