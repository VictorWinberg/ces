import React, { Component } from "react";

class Packag extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Package Shipping</h1>

          <div class="columns has-text-centered is-multiline is-mobile">
            <div class="column is-half-mobile">
              Date <br />
              <span className="is-size-3">2020-02-05</span>
            </div>
            <div class="column is-half-mobile">
              Tracking Id <br />
              834598283942
            </div>
            <div class="column is-half-mobile">Third column</div>
            <div class="column is-half-mobile">Fourth column</div>
          </div>

          <div className="field is-grouped is-grouped-right">
            <p className="control">
              <a className="button is-primary">Print</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Packag;
