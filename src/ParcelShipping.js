import React, { Component } from "react";
import { Link } from "react-router-dom";

class ParcelShipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      weight: "",
      height: "",
      width: "",
      depth: "",
      isRecordedParcel: false,
      isWeapon: false,
      isLiveAnimal: false,
      isCautious: false,
      isRefrigerated: false,
      loading: false,
      hasResult: false,
      hasNoResult: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleToggle({ target }) {
    this.setState({ [target.name]: !this.state[target.name] });
  }

  handleSubmit(event) {
    console.log("ParcelShipping", JSON.parse(JSON.stringify(this.state)));
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

  renderNoResults() {
    return (
      <div className="field is-horizontal animated bounceInRight">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="container columns is-fullwidth">
            <div className="column">
              <h4 className="is-size-4">
                No possible parcel route with given information found
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
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
                  pathname: "/parcel-receipt",
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
                  pathname: "/parcel-receipt",
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
          <h1 className="title is-1">Parcel Shipping</h1>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">From</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="select is-fullwidth">
                  <select
                    name="from"
                    required
                    value={this.state.from}
                    onChange={this.handleChange}
                  >
                    <option value="">Select city</option>
                    <option>Abidjan</option>
                    <option>Accra</option>
                    <option>Alexandria</option>
                    <option>Algiers</option>
                    <option>Cairo</option>
                    <option>Cape</option>
                    <option>Casablanca</option>
                    <option>Dar</option>
                    <option>Douala</option>
                    <option>Giza</option>
                    <option>Johannesburg</option>
                    <option>Kano</option>
                    <option>Kinshasa</option>
                    <option>Kumasi</option>
                    <option>Lagos</option>
                    <option>Luanda</option>
                    <option>Nairobi</option>
                  </select>
                </div>
              </div>
              <div className="field-label is-normal">
                <label className="label">To</label>
              </div>
              <div className="field-body">
                <div className="select is-fullwidth">
                  <select
                    name="to"
                    required
                    value={this.state.to}
                    onChange={this.handleChange}
                  >
                    <option value="">Select city</option>
                    <option>Abidjan</option>
                    <option>Accra</option>
                    <option>Alexandria</option>
                    <option>Algiers</option>
                    <option>Cairo</option>
                    <option>Cape</option>
                    <option>Casablanca</option>
                    <option>Dar</option>
                    <option>Douala</option>
                    <option>Giza</option>
                    <option>Johannesburg</option>
                    <option>Kano</option>
                    <option>Kinshasa</option>
                    <option>Kumasi</option>
                    <option>Lagos</option>
                    <option>Luanda</option>
                    <option>Nairobi</option>
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
                    placeholder="N/A"
                    style={{ maxWidth: "5rem" }}
                    value={this.state.weight}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="control">
                  <span className="button is-white">kg</span>
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Size</label>
            </div>

            <div className="field-body">
              <div className="field has-addons">
                <p className="control is-expanded">
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
                    <select defaultValue="cm">
                      <option>mm</option>
                      <option>cm</option>
                      <option>m</option>
                    </select>
                  </span>
                </p>
              </div>
              <div className="field has-addons">
                <p className="control is-expanded">
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
                    <select defaultValue="cm">
                      <option>mm</option>
                      <option>cm</option>
                      <option>m</option>
                    </select>
                  </span>
                </p>
              </div>
              <div className="field has-addons">
                <p className="control is-expanded">
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
                    <select defaultValue="cm">
                      <option>mm</option>
                      <option>cm</option>
                      <option>m</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Options</label>
            </div>

            <div className="field-body">
              <div className="field">
                <p className="control b-checkbox">
                  <input
                    className="is-checkradio"
                    id="isRecordedParcel"
                    type="checkbox"
                    name="isRecordedParcel"
                    checked={this.state.isRecordedParcel}
                    onChange={this.handleToggle}
                  />
                  <label htmlFor="isRecordedParcel">Recorded</label>
                </p>
              </div>
              <div className="field">
                <p className="control b-checkbox">
                  <input
                    className="is-checkradio"
                    id="isWeapon"
                    type="checkbox"
                    name="isWeapon"
                    checked={this.state.isWeapon}
                    onChange={this.handleToggle}
                  />
                  <label htmlFor="isWeapon">Weapon</label>
                </p>
              </div>
              <div className="field">
                <p className="control b-checkbox">
                  <input
                    className="is-checkradio"
                    id="isLiveAnimal"
                    type="checkbox"
                    name="isLiveAnimal"
                    checked={this.state.isLiveAnimal}
                    onChange={this.handleToggle}
                  />
                  <label htmlFor="isLiveAnimal">Live Animal</label>
                </p>
              </div>
              <div className="field">
                <p className="control b-checkbox">
                  <input
                    className="is-checkradio"
                    id="isCautious"
                    type="checkbox"
                    name="isCautious"
                    checked={this.state.isCautious}
                    onChange={this.handleToggle}
                  />
                  <label htmlFor="isCautious">Cautious</label>
                </p>
              </div>
              <div className="field">
                <p className="control b-checkbox">
                  <input
                    className="is-checkradio"
                    id="isRefrigerated"
                    type="checkbox"
                    name="isRefrigerated"
                    checked={this.state.isRefrigerated}
                    onChange={this.handleToggle}
                  />
                  <label htmlFor="isRefrigerated">Refrigerated</label>
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
          {this.state.hasNoResult && this.renderNoResults()}
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
export default ParcelShipping;
