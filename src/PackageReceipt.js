import React, { Component } from "react";
import QRCode from "qrcode.react";

class Packag extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-1-tablet is-size-3-mobile has-text-centered-mobile">
            Package Receipt
          </h1>
          <h4 className="is-size-4">Parcel</h4>
          <div className="columns has-text-centered is-multiline is-mobile">
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              Tracking Id <br />
              <span className="is-size-3">834598283942</span>
            </div>
            <div className="column is-half-desktop is-half-tablet is-full-mobile">
              Size <br />
              <span className="is-size-3">30 cm x 5 cm x 20 cm</span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              Weight <br />
              <span className="is-size-3">0.75 kg</span>
            </div>
          </div>

          <h4 className="is-size-4">Delivery</h4>
          <div className="columns has-text-centered is-multiline is-mobile">
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              From <br />
              <span className="is-size-3">Cairo</span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              To <br />
              <span className="is-size-3">Congo</span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              Time <br />
              <span className="is-size-3">~ 2 days</span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
              Price <br />
              <span className="is-size-3">280 $</span>
            </div>
          </div>

          <div className="has-text-centered">
            <QRCode value="http://facebook.github.io/react/" />
            <br />
            <strong>Date</strong> 2020-02-05
          </div>

          <h4 className="is-size-4">Route</h4>
          <table class="table is-size-4">
            <tbody>
              <tr>
                <td className="has-text-weight-light">Flight </td>
                <td>Cairo</td>
                <td className="has-text-weight-light">-></td>
                <td>Bongo</td>
              </tr>
              <tr>
                <td className="has-text-weight-light">Boat </td>
                <td>Bongo</td>
                <td className="has-text-weight-light">-></td>
                <td>Longo</td>
              </tr>
              <tr>
                <td className="has-text-weight-light">Truck </td>
                <td>Longo</td>
                <td className="has-text-weight-light">-></td>
                <td>Congo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Packag;
