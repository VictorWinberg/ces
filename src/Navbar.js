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
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="/logo.png"
                    alt="Parcel Delivery IT Solution"
                    style={{ maxHeight: "none" }}
                    width="64"
                    height="64"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-5">East India Trading</p>
                <p class="subtitle is-7">Parcel Delivery IT Solution</p>
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
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
