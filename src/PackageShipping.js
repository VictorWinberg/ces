import React, { Component } from "react";
import { Link } from "react-router-dom";

class PackageShipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      weight: "",
      height: "",
      length: "",
      width: "",
      loading: false,
      hasResult: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    console.log(JSON.parse(JSON.stringify(this.state)));
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, hasResult: true });
    }, 50);
    event.preventDefault();
  }

  renderResults({ cheap, fast }) {
    return (
      <div className="field is-horizontal animated bounceInRight">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="container columns is-fullwidth">
            <div className="column is-half">
              <Link
                to={{
                  pathname: "/package-receipt",
                  state: { ...this.state, ...fast }
                }}
              >
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Fastest</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      Delivery time: {fast.time}
                      <br />
                      Price: {fast.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column is-half">
              <Link
                to={{
                  pathname: "/package-receipt",
                  state: { ...this.state, ...cheap }
                }}
              >
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Cheapest</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      Delivery time: {cheap.time}
                      <br />
                      Price: {cheap.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="hero-body">
        <form className="container" onSubmit={this.handleSubmit}>
          <h1 className="title is-1">Package Shipping</h1>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">From</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div class="select is-fullwidth">
                  <select
                    name="from"
                    required
                    value={this.state.from}
                    onChange={this.handleChange}
                  >
                    <option value="">Select city</option>
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
                  <select
                    name="to"
                    required
                    value={this.state.to}
                    onChange={this.handleChange}
                  >
                    <option value="">Select city</option>
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
                    name="weight"
                    className="slider is-fullwidth"
                    step="1"
                    min="0"
                    max="100"
                    type="range"
                    value={this.state.weight}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="control">
                  <input
                    name="weight"
                    required
                    type="text"
                    className="button is-dark"
                    style={{ maxWidth: "5rem" }}
                    value={this.state.weight}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="control">
                  <span class="button is-white">kg</span>
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
                  <input
                    name="height"
                    required
                    className="input"
                    type="text"
                    placeholder="Height"
                    value={this.state.height}
                    onChange={this.handleChange}
                  />
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
                  <input
                    name="width"
                    required
                    className="input"
                    type="text"
                    placeholder="Width"
                    value={this.state.width}
                    onChange={this.handleChange}
                  />
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
                  <input
                    name="depth"
                    required
                    className="input"
                    type="text"
                    placeholder="Depth"
                    value={this.state.depth}
                    onChange={this.handleChange}
                  />
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
              <button
                className={`button is-primary ${
                  this.state.loading ? "is-loading" : ""
                }`}
                type="submit"
              >
                Find
              </button>
            </p>
          </div>

          {this.state.hasResult &&
            this.renderResults({
              cheap: {
                time: "~ 7 days",
                price: "100 $",
                trackingId: "4413-CHEAP-5613"
              },
              fast: {
                time: "~ 2 days",
                price: "280 $",
                trackingId: "9572-FAST-1742"
              }
            })}
        </form>
      </div>
    );
  }
}
export default PackageShipping;
