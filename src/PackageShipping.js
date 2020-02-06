import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                <div class="select is-fullwidth">
                  <select>
                    <option>Select city</option>
                    <option>Cairo</option>
                    <option>Congo</option>
                  </select>
                </div>
              </div>
              <div className="field-label is-normal">
                <label className="label">To</label>
              </div>
              <div className="field-body">
                <div class="select is-fullwidth">
                  <select>
                    <option>Select city</option>
                    <option>Cairo</option>
                    <option>Congo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Weight</label>
            </div>
            <div className="field-body">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    id="slider"
                    className="slider is-fullwidth"
                    step="1"
                    min="0"
                    max="100"
                    type="range"
                  />
                </p>
                <p className="control">
                  <span className="button is-dark">50 kg</span>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Size</label>
            </div>

            <div className="field-body">
              <div className="field has-addons has-addons-centered">
                <p className="control">
                  <input className="input" type="text" placeholder="Height" />
                </p>
                <p className="control">
                  <span className="select">
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
                  <input className="input" type="text" placeholder="Width" />
                </p>
                <p className="control">
                  <span className="select">
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
                <p className="control">
                  <span className="select">
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
              <a href className="button is-primary">
                Find
              </a>
            </p>
          </div>

          <div className="field is-horizontal animated bounceInRight">
            <div className="field-label"></div>
            <div className="field-body">
              <div className="container columns is-fullwidth">
                <div className="column is-half">
                  <Link to="/package-receipt">
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">Fastest</p>
                      </header>
                      <div className="card-content">
                        <div className="content">
                          Delivery time: ~ 2 days
                          <br />
                          Price: 280 $
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="column is-half">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">Cheapest</p>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        Delivery time: ~ 7 days
                        <br />
                        Price: 100 $
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PackageShipping;
