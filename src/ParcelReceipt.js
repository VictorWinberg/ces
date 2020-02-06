import React, { Component } from "react";
import QRCode from "qrcode.react";
import ReactToPrint from "react-to-print";

class ParcelReceipt extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state || {};
  }

  render() {
    return (
      <div className="hero-body" ref={el => (this.printComponentRef = el)}>
        <style>{`@media print {.is-hidden-print {display: none !important;}}`}</style>
        <div className="container">
          <h1 className="title is-size-1-tablet is-size-3-mobile has-text-centered-mobile">
            Parcel Receipt
          </h1>

          <h4 className="is-size-4">Parcel</h4>
          <div className="columns has-text-centered is-multiline is-mobile">
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              Tracking Id <br />
              <span className="is-size-3">{this.state.trackingId}</span>
            </div>
            <div className="column is-half-desktop is-half-tablet is-full-mobile">
              Size <br />
              <span className="is-size-3">
                {`${this.state.height} cm x ${this.state.width} cm x ${this.state.depth} cm`}
              </span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              Weight <br />
              <span className="is-size-3">{this.state.weight} kg</span>
            </div>
          </div>

          <h4 className="is-size-4">Delivery</h4>
          <div className="columns has-text-centered is-multiline is-mobile">
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              From <br />
              <span className="is-size-3">{this.state.from}</span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              To <br />
              <span className="is-size-3">{this.state.to}</span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile is-hidden-print">
              Time <br />
              <span className="is-size-3">{this.state.time}</span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile is-hidden-print">
              Price <br />
              <span className="is-size-3">{this.state.price}</span>
            </div>
          </div>

          <div className="has-text-centered">
            <a
              href={`${window.location.origin}/track-n-trace/${this.state.trackingId}`}
            >
              <QRCode
                value={`${window.location.origin}/track-n-trace/${this.state.trackingId}`}
              />
            </a>
            <br />
            <em>Date {new Date().toLocaleString()}</em>
          </div>

          <h4 className="is-size-4 is-hidden-print">Route</h4>
          <table className="table is-size-4 is-hidden-print">
            <tbody>
              <tr>
                <td className="has-text-weight-light">Truck </td>
                <td>{this.state.from}</td>
                <td className="has-text-weight-light">-></td>
                <td>Kisumu</td>
              </tr>
              <tr>
                <td className="has-text-weight-light">Flight </td>
                <td>Kisumu</td>
                <td className="has-text-weight-light">-></td>
                <td>Dakar</td>
              </tr>
              <tr>
                <td className="has-text-weight-light">Boat </td>
                <td>Dakar</td>
                <td className="has-text-weight-light">-></td>
                <td>{this.state.to}</td>
              </tr>
            </tbody>
          </table>

          <div className="field is-grouped is-grouped-right is-hidden-print">
            <p className="control">
              <ReactToPrint
                trigger={() => (
                  <button className="button is-primary" type="submit">
                    Print
                  </button>
                )}
                content={() => this.printComponentRef}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default ParcelReceipt;
