/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarActive: false };
  }

  toggleActive() {
    this.setState({ navbarActive: !this.state.navbarActive });
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="/logo.png"
                    alt="Parcel Delivery IT Solution"
                    style={{ maxHeight: "none" }}
                    width="64"
                    height="64"
                  />
                </figure>
              </div>
              <div className="media-content" style={{ overflow: "hidden" }}>
                <p className="title is-5">East India Trading</p>
                <p className="subtitle is-7">Parcel Delivery IT Solution</p>
              </div>
            </div>
          </span>

          <a
            role="button"
            className={`navbar-burger burger ${
              this.state.navbarActive ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            onClick={() => this.toggleActive()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbar"
          className={`navbar-menu ${
            this.state.navbarActive ? "is-active" : ""
          }`}
        >
          <div className="navbar-start">
            <Link
              to="/parcel-shipping"
              className="navbar-item is-tab"
              onClick={() => this.toggleActive()}
            >
              Parcel Shipping
            </Link>
            <Link
              to="/track-n-trace"
              className="navbar-item is-tab"
              onClick={() => this.toggleActive()}
            >
              Track &amp; Trace
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Language</a>

                <div className="navbar-dropdown">
                  <a
                    className="navbar-item is-active"
                    onClick={() => this.toggleActive()}
                  >
                    English
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-item">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Currency</a>

                <div className="navbar-dropdown">
                  <Link
                    to="?currency=usd"
                    className="navbar-item"
                    onClick={() => this.toggleActive()}
                  >
                    US Dollar
                  </Link>
                  <Link
                    to="?currency=gbp"
                    className="navbar-item"
                    onClick={() => this.toggleActive()}
                  >
                    British Pund
                  </Link>
                  <Link
                    to="?currency=eur"
                    className="navbar-item"
                    onClick={() => this.toggleActive()}
                  >
                    Euro
                  </Link>
                  <Link
                    to="?currency=dkk"
                    className="navbar-item"
                    onClick={() => this.toggleActive()}
                  >
                    Danish Krone
                  </Link>
                  <Link
                    to="?currency=sek"
                    className="navbar-item"
                    onClick={() => this.toggleActive()}
                  >
                    Swedish Krone
                  </Link>
                  <Link
                    to="?currency=nok"
                    className="navbar-item"
                    onClick={() => this.toggleActive()}
                  >
                    Norwegian Krone
                  </Link>
                  <Link
                    to="?currency=aed"
                    className="navbar-item"
                    onClick={() => this.toggleActive()}
                  >
                    Emirati Dirhams
                  </Link>
                  <Link
                    to="?currency=aud"
                    className="navbar-item"
                    onClick={() => this.toggleActive()}
                  >
                    Australian Dollar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
