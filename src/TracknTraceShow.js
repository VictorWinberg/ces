import React, { Component } from "react";
import QRCode from "qrcode.react";

class TracknTraceShow extends Component {
  constructor(props) {
    super(props);

    this.state = { id: props.match.params.id, city: "", routes: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleArrived = this.handleArrived.bind(this);
    this.renderHandleArrived = this.renderHandleArrived.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        routes: [
          {
            city: "Kisumu",
            date: new Date(new Date().getTime() - 200001337).toLocaleString(),
            status: "Arrived"
          },
          {
            city: "Cairo",
            date: new Date(new Date().getTime() - 300006969).toLocaleString(),
            status: "Sent"
          },
          {
            city: "Dakar",
            date: new Date(new Date().getTime() - 600004242).toLocaleString(),
            status: "Sent"
          }
        ]
      });
    }, 500);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleArrived(event) {
    console.log("TracknTraceArrived", JSON.parse(JSON.stringify(this.state)));
    this.setState({ loading: true });
    setTimeout(() => {
      const routes = JSON.parse(JSON.stringify(this.state.routes));
      routes.unshift({
        city: this.state.city,
        date: new Date().toLocaleString(),
        status: "Arrived"
      });
      this.setState({ loading: false, routes });
    }, 500);
    event.preventDefault();
  }

  handleLast(status) {
    console.log("TracknTrace" + status, JSON.parse(JSON.stringify(this.state)));
    const routes = JSON.parse(JSON.stringify(this.state.routes));
    routes[0].status = status;

    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, routes });
    }, 500);
  }

  renderRoute({ city, date, status }) {
    return (
      <tr key={date}>
        <td>{city}</td>
        <td className="has-text-weight-light">
          <em>{date}</em>
        </td>
        <td className="has-text-weight-light">{status}</td>
      </tr>
    );
  }

  renderHandleArrived() {
    return (
      <form onSubmit={this.handleArrived}>
        <div className="field is-horizontal">
          <div className="field has-addons">
            <p className="control is-expanded is-size-4">
              <span className="select is-fullwidth">
                <select
                  name="city"
                  required
                  value={this.state.city}
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
                  <option>Copenhagen</option>
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
                  <option>Stockholm</option>
                </select>
              </span>
            </p>
            <p className="control">
              <button
                className={`button is-info is-size-4 ${
                  this.state.loading ? "is-loading" : ""
                }`}
                type="submit"
              >
                Arrived
              </button>
            </p>
          </div>
        </div>
      </form>
    );
  }

  renderHandleLast(status) {
    return (
      <button
        className={`button is-size-4 is-info ${
          this.state.loading ? "is-loading" : ""
        }`}
        onClick={() => this.handleLast(status)}
      >
        {status}
      </button>
    );
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
            <tbody>{this.state.routes.map(this.renderRoute)}</tbody>
          </table>

          {true &&
            this.state.routes.length > 0 &&
            this.state.routes[0].status !== "Distributed" && (
              <h4 className="is-size-4">Update Delivery</h4>
            )}
          {true &&
            this.state.routes.length > 0 &&
            this.state.routes[0].status === "Sent" &&
            this.renderHandleArrived()}
          {true &&
            this.state.routes.length > 0 &&
            this.state.routes.length < 5 &&
            this.state.routes[0].status === "Arrived" &&
            this.renderHandleLast("Sent")}
          {true &&
            this.state.routes.length === 5 &&
            this.state.routes[0].status !== "Distributed" &&
            this.renderHandleLast("Distributed")}
        </div>
      </div>
    );
  }
}
export default TracknTraceShow;
