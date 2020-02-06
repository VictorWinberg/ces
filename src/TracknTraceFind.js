import React, { Component } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";

class TracknTraceFind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      loading: false,
      hasResult: false,
      hasNoResult: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    console.log("TracknTraceFind", JSON.parse(JSON.stringify(this.state)));
    this.setState({ loading: true, hasResult: false, hasNoResult: false });
    setTimeout(() => {
      if (Math.random() < 0.3) {
        this.setState({ loading: false, hasNoResult: true });
      } else {
        this.setState({ loading: false, hasResult: true });
      }
    }, 500);
    event.preventDefault();
  }

  renderNoResult() {
    return (
      <div className="field is-horizontal animated bounceInRight">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="container columns is-fullwidth">
            <div className="column">
              <h4 className="is-size-4">
                No parcel with given <strong>Tracking Id</strong> found
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderResult() {
    return (
      <div className="field is-horizontal animated bounceInRight">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="container columns is-fullwidth">
            <div className="column is-half">
              <h4 className="is-size-4">Parcel found</h4>
              <Link
                to={{
                  pathname: `/track-n-trace/${this.state.id}`
                }}
              >
                <div className="card has-text-centered">
                  <div className="card-content">
                    <div className="card-image" style={{ paddingTop: "2rem" }}>
                      <QRCode value="https://victorwinberg.github.io" />
                    </div>
                    <div className="card-content">
                      <p className="title is-4">{this.state.id}</p>
                      <p className="subtitle is-6">Tracking Id</p>
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
          <h1 className="title is-1">Track &amp; Trace</h1>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Tracking Id</label>
            </div>

            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    name="id"
                    required
                    className="input"
                    type="text"
                    placeholder="E.g. 9572-FAST-1742"
                    value={this.state.id}
                    onChange={this.handleChange}
                  />
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

          {this.state.hasNoResult && this.renderNoResult()}
          {this.state.hasResult && this.renderResult()}
        </form>
      </div>
    );
  }
}
export default TracknTraceFind;
