import React from "react";
import ReactDOM from "react-dom";
import money from "money";
import "bulma/css/bulma.min.css";
import "bulma-slider/dist/css/bulma-slider.min.css";
import "bulma-checkradio/dist/css/bulma-checkradio.min.css";
import "animate.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

fetch(
  "https://openexchangerates.org/api/latest.json?app_id=df63dd77817542ee95449bb3f0517029"
)
  .then(res => res.json())
  .then(json => {
    if (json.error) throw json.error;

    money.rates = json.rates;
    money.base = json.base;
    ReactDOM.render(<App />, document.getElementById("root"));
  })
  .catch(err => ReactDOM.render(<App />, document.getElementById("root")));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
