import React, { Component } from "react";

class PackageShipping extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Package Shipping</h1>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">From</label>
            </div>
            <div className="field-body">
              <div className="field">
                <input className="input" type="text" placeholder="City" />
              </div>
              <div className="field-label is-normal">
                <label className="label">To</label>
              </div>
              <div className="field-body">
                <input className="input" type="text" placeholder="City" />
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Weight</label>
            </div>
            <div className="field-body">
              <input
                id="slider"
                className="slider is-fullwidth"
                step="1"
                min="0"
                max="100"
                value="40"
                type="range"
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Size</label>
            </div>

            <div className="field-body">
              <div className="field has-addons has-addons-centered">
                <p class="control">
                  <input className="input" type="text" placeholder="Height" />
                </p>
                <p class="control">
                  <span class="select">
                    <select>
                      <option>mm</option>
                      <option selected>cm</option>
                      <option>m</option>
                    </select>
                  </span>
                </p>
              </div>
              <div className="field has-addons has-addons-centered">
                <p class="control">
                  <input className="input" type="text" placeholder="Width" />
                </p>
                <p class="control">
                  <span class="select">
                    <select>
                      <option>mm</option>
                      <option selected>cm</option>
                      <option>m</option>
                    </select>
                  </span>
                </p>
              </div>
              <div className="field has-addons has-addons-centered">
                <p className="control">
                  <input className="input" type="text" placeholder="Length" />
                </p>
                <p class="control">
                  <span class="select">
                    <select>
                      <option>mm</option>
                      <option selected>cm</option>
                      <option>m</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-right">
            <p className="control">
              <a className="button is-primary">Submit</a>
            </p>
            <p className="control">
              <a className="button is-light">Cancel</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default PackageShipping;
