/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import QRCode from "qrcode.react";
import ReactToPrint from "react-to-print";
import money from "money";
import qs from "query-string";

class ParcelReceipt extends Component {
  constructor(props) {
    super(props);

    this.state = props.location.state || {};
    this.state.initialLoading = true;

    this.currency = this.currency.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ initialLoading: false });
    }, 500);
  }

  renderOption({ title, subtitle, classType }) {
    return (
      <div className="tile is-parent">
        <article className={`tile is-child notification ${classType}`}>
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </article>
      </div>
    );
  }

  currency() {
    const defaultCurrency = "USD";
    if (!this.state.price) return null;
    const { currency } = qs.parse(this.props.location.search);
    if (!currency) return `${this.state.price} ${defaultCurrency}`;

    const price = money(this.state.price)
      .from(defaultCurrency)
      .to(currency.toUpperCase());
    return `${Math.round(price)} ${currency.toUpperCase()}`;
  }

  render() {
    if (Object.keys(this.state).length === 0) {
      return <Redirect to="/parcel-shipping" />;
    }

    if (this.state.initialLoading) {
      return (
        <div className="hero-body" ref={el => (this.printComponentRef = el)}>
          <div className="container">
            <h1 className="title is-size-1-tablet is-size-3-mobile has-text-centered-mobile">
              Parcel Receipt
            </h1>
            <h4 className="is-size-4">Generating...</h4>
          </div>
        </div>
      );
    }

    return (
      <div className="hero-body" ref={el => (this.printComponentRef = el)}>
        <style>{`@media print {.is-hidden-print {display: none !important;}}`}</style>
        <div className="container">
          <h1 className="title is-size-1-tablet is-size-3-mobile has-text-centered-mobile">
            Parcel Receipt
          </h1>

          <h4 className="is-size-4">Parcel</h4>
          <div className="columns has-text-centered is-multiline is-mobile">
            <div className="column is-one-quarter-desktop is-full-tablet is-full-mobile">
              Tracking Id <br />
              <span className="is-size-3">{this.state.trackingId}</span>
            </div>
            <div className="column is-half-desktop is-full-tablet is-full-mobile">
              Size <br />
              <span className="is-size-3">
                {`${this.state.height} ${this.state.heightUnit} x ${this.state.width} ${this.state.widthUnit} x ${this.state.depth} ${this.state.depthUnit}`}
              </span>
            </div>
            <div className="column is-one-quarter-desktop is-full-tablet is-full-mobile">
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
              <span className="is-size-3">{this.state.duration} hours</span>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile is-hidden-print">
              Price
              <div className="navbar-item has-dropdown is-hoverable is-inline-block is-hidden-tablet-only is-hidden-mobile">
                <a className="navbar-link">&nbsp;</a>

                <div className="navbar-dropdown">
                  <Link to="?currency=usd" className="navbar-item">
                    US Dollar
                  </Link>
                  <Link to="?currency=gbp" className="navbar-item">
                    British Pund
                  </Link>
                  <Link to="?currency=eur" className="navbar-item">
                    Euro
                  </Link>
                  <Link to="?currency=dkk" className="navbar-item">
                    Danish Krone
                  </Link>
                  <Link to="?currency=sek" className="navbar-item">
                    Swedish Krone
                  </Link>
                  <Link to="?currency=nok" className="navbar-item">
                    Norwegian Krone
                  </Link>
                  <Link to="?currency=aed" className="navbar-item">
                    Emirati Dirhams
                  </Link>
                  <Link to="?currency=aud" className="navbar-item">
                    Australian Dollar
                  </Link>
                </div>
              </div>
              <br />
              <span className="is-size-3">{this.currency()}</span>
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

          {(this.state.isRecordedParcel ||
            this.state.isWeapon ||
            this.state.isLiveAnimal ||
            this.state.isCautious ||
            this.state.isRefrigerated) && <h4 className="is-size-4">Labels</h4>}
          <div className="tile is-ancestor">
            {this.state.isRecordedParcel &&
              this.renderOption({
                title: "RECORDED PARCEL",
                subtitle: "This parcel should be recorded at destination.",
                classType: "is-primary"
              })}
            {this.state.isWeapon &&
              this.renderOption({
                title: "WEAPON",
                subtitle: "This parcel contains weapon(s).",
                classType: "is-danger"
              })}
            {this.state.isLiveAnimal &&
              this.renderOption({
                title: "LIVE ANIMAL",
                subtitle: "This parcel contains live animal(s).",
                classType: "is-danger"
              })}
            {this.state.isCautious &&
              this.renderOption({
                title: "CAUTIOUS",
                subtitle: "This is a cautious parcel.",
                classType: "is-warning"
              })}
            {this.state.isRefrigerated &&
              this.renderOption({
                title: "REFRIGERATED",
                subtitle: "Keep parcel refrigerated.",
                classType: "is-info"
              })}
          </div>

          <h4 className="is-size-4 is-hidden-print">Planned Route</h4>
          <table className="table is-size-4 is-size-6-mobile is-hidden-print is-fullwidth">
            <tbody>
              {this.state.route.map((from, id, routes) => {
                const to = routes[id + 1];
                if (routes.length - 1 === id) return null;

                return (
                  <tr key={id}>
                    <td className="has-text-weight-light">BOAT </td>
                    <td>{from}</td>
                    <td className="has-text-weight-light is-hidden-mobile">
                      ->
                    </td>
                    <td>{to}</td>
                  </tr>
                );
              })}
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
