import React from "react";

export default PackageShipping => {
  return (
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1">Package Shipping</h1>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">From</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="text" placeholder="City" />
              </p>
            </div>
            <div className="field-label is-normal">
              <label className="label">To</label>
            </div>
            <div className="field-body">
              <p className="control is-expanded">
                <input className="input" type="text" placeholder="City" />
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <input
            className="slider is-fullwidth"
            step="1"
            min="0"
            max="100"
            value="40"
            type="range"
          />
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped is-grouped-right">
          <p className="control">
            <a className="button is-primary">Submit</a>
          </p>
          <p className="control">
            <a className="button is-light">Cancel</a>
          </p>
        </div>
      </div>
    </div>
  );
};
