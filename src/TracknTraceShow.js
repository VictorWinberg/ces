import React, { Component } from "react";
import QRCode from "qrcode.react";

class TracknTraceShow extends Component {
  constructor(props) {
    super(props);

    this.state = { id: props.match.params.id };
  }

  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-1-tablet is-size-3-mobile has-text-centered-mobile">
            Track &amp; Trace
          </h1>

          <h4 className="is-size-4">Parcel</h4>
          <div className="columns is-multiline is-mobile">
            <div className="column is-half-tablet is-full-mobile">
              <div className="card has-text-centered">
                <div className="card-image" style={{ paddingTop: "2rem" }}>
                  <a
                    href={`${window.location.origin}/track-n-trace/${this.state.id}`}
                  >
                    <QRCode
                      value={`${window.location.origin}/track-n-trace/${this.state.id}`}
                    />
                  </a>
                </div>
                <div className="card-content">
                  <p className="title is-4">{this.state.id}</p>
                  <p className="subtitle is-6">Tracking Id</p>
                </div>
              </div>
            </div>
          </div>

          <h4 className="is-size-4">Delivery Route</h4>
          <table className="table is-size-4">
            <tbody>
              <tr>
                <td>Kisumu</td>
                <td className="has-text-weight-light">
                  <em>2020-02-06</em>
                </td>
                <td className="has-text-weight-light">Arrived</td>
              </tr>
              <tr>
                <td>Cairo</td>
                <td className="has-text-weight-light">
                  <em>2020-01-23</em>
                </td>
                <td className="has-text-weight-light">Sent</td>
              </tr>
              <tr>
                <td>Dakar</td>
                <td className="has-text-weight-light">
                  <em>2020-01-01</em>
                </td>
                <td className="has-text-weight-light">Sent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TracknTraceShow;
