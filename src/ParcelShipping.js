import React, { Component } from "react";
import { Link } from "react-router-dom";
import money from "money";
import qs from "query-string";

const generateTrackingId = type => {
  function pad(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  const random = () => pad(Math.floor(Math.random() * 10000), 4);
  return [random(), type, random()].join("-");
};

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
      heightUnit: "cm",
      widthUnit: "cm",
      depthUnit: "cm",
      isRecordedParcel: false,
      isWeapon: false,
      isLiveAnimal: false,
      isCautious: false,
      isRefrigerated: false,
      loading: false,
      initialLoading: true,
      result: {},
      cities: [],
      hasResult: false,
      hasNoResult: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("/api/cities")
      .then(res => res.json())
      .then(json => {
        this.setState({
          initialLoading: false,
          cities: json.map(({ name }) => name).sort()
        });
      })
      .catch(err => console.log(err));
  }

  currency(price) {
    const defaultCurrency = "USD";
    if (!price) return null;
    const { currency } = qs.parse(this.props.location.search);
    if (!currency) return `${price} ${defaultCurrency}`;

    const calcPrice = money(price)
      .from(defaultCurrency)
      .to(currency.toUpperCase());
    return `${Math.round(calcPrice)} ${currency.toUpperCase()}`;
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
      hasResult: false,
      hasNoResult: false,
      result: {}
    });
  }

  handleToggle({ target }) {
    this.setState({
      [target.name]: !this.state[target.name],
      hasResult: false,
      hasNoResult: false,
      result: {}
    });
  }

  handleSubmit(event) {
    console.log("ParcelShipping", JSON.parse(JSON.stringify(this.state)));
    this.setState({
      loading: true,
      hasResult: false,
      hasNoResult: false,
      result: {}
    });

    fetch("/api/routes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        const result = {
          cheap: {
            ...json.cheap,
            trackingId: generateTrackingId("CHEAP")
          },
          fast: {
            ...json.fast,
            trackingId: generateTrackingId("FAST")
          }
        };
        if (json.fast.price) {
          this.setState({ loading: false, hasResult: true, result });
        } else {
          this.setState({ loading: false, hasNoResult: true });
        }
      })
      .catch(err => {
        console.error(err);
        const result = {
          fast: {
            price: 299,
            duration: 27,
            route: ["HVALBUGTEN", "OMDURMAN", "CAIRO"]
          },
          cheap: {
            price: 48,
            duration: 420,
            route: ["ADDIS ADEBA", "ZANZIBAR", "TANGER", "TUNIS", "CAIRO"]
          }
        };
        this.setState({ loading: false, hasResult: true, result });
      });
    event.preventDefault();
  }

  renderNoResults() {
    return (
      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="container columns is-fullwidth">
            <div className="column fadeInRightBig faster">
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
      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="container columns is-fullwidth">
            <div className="column is-half animated fadeInRightBig faster">
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
                      Delivery time: {fast.duration} hours
                      <br />
                      Price: {this.currency(fast.price)}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column is-half animated fadeInRightBig faster delay-150ms">
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
                      Delivery time: {cheap.duration} hours
                      <br />
                      Price: {this.currency(cheap.price)}
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
                <div
                  className={`select is-fullwidth ${
                    this.state.initialLoading ? "is-loading" : ""
                  }`}
                >
                  <select
                    name="from"
                    required
                    value={this.state.from}
                    onChange={this.handleChange}
                  >
                    <option value="">Select city</option>
                    {this.state.cities.map(city => (
                      <option key={city}>{city}</option>
                    ))}
                    <option>WESTPORT</option>
                  </select>
                </div>
              </div>
              <div className="field-label is-normal">
                <label className="label">To</label>
              </div>
              <div className="field-body">
                <div
                  className={`select is-fullwidth ${
                    this.state.initialLoading ? "is-loading" : ""
                  }`}
                >
                  <select
                    name="to"
                    required
                    value={this.state.to}
                    onChange={this.handleChange}
                  >
                    <option value="">Select city</option>
                    {this.state.cities.map(city => (
                      <option key={city}>{city}</option>
                    ))}
                    <option>CAIRO</option>
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
                    type="number"
                    min="0"
                    max="1000000"
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
                    type="number"
                    min="0"
                    max="1000000"
                    placeholder="Height"
                    value={this.state.height}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="control">
                  <span className="select">
                    <select
                      name="heightUnit"
                      value={this.state.heightUnit}
                      onChange={this.handleChange}
                    >
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
                    type="number"
                    min="0"
                    max="1000000"
                    placeholder="Width"
                    value={this.state.width}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="control">
                  <span className="select">
                    <select
                      name="widthUnit"
                      value={this.state.widthUnit}
                      onChange={this.handleChange}
                    >
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
                    type="number"
                    min="0"
                    max="1000000"
                    placeholder="Depth"
                    value={this.state.depth}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="control">
                  <span className="select">
                    <select
                      name="depthUnit"
                      value={this.state.depthUnit}
                      onChange={this.handleChange}
                    >
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
                } `}
                disabled={this.state.hasResult || this.state.hasNoResult}
                type="submit"
              >
                Find
              </button>
            </p>
          </div>
          {this.state.hasNoResult && this.renderNoResults()}
          {this.state.hasResult && this.renderResults(this.state.result)}
        </form>
      </div>
    );
  }
}
export default ParcelShipping;
