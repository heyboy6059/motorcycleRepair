import React, { Component } from 'react';

class MechanicRegistration extends Component {
  render() {
    return (
      <div className="container">
        <h2>Mechanic Registration</h2>
        <form>
          <div className="form-group row">
            <label htmlFor="inputCompany" className="col-sm-2 col-form-label">
              Company Name
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputCompany"
                placeholder="e.g. Happy Motorcycle"
                onChange={this.companyChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputMechanic" className="col-sm-2 col-form-label">
              Mechanic Name
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputMechanic"
                placeholder="e.g. John Doe"
                onChange={this.mechanicChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputLicence" className="col-sm-2 col-form-label">
              Licence Number
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputMechanic"
                placeholder="e.g. ABCD12345"
                onChange={this.mechanicChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="e.g. 1 main st, St Lucia QLD 4067"
                onChange={this.addressChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPhone" className="col-sm-2 col-form-label">
              Phone Number
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputPhone"
                placeholder="e.g. 0400 123 456"
                onChange={this.phoneChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="inputServiceDay"
            >
              Service Day
            </label>
            <select
              className="custom-select col-sm-3"
              id="inputServiceDay"
              onChange={this.serviceDayChange}
              style={{ marginLeft: '1em' }}
            >
              <option value="0">Choose...</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Mon-Thurs">Mon-Thurs</option>
              <option value="Mon-Sat">Mon-Sat</option>
              <option value="Wed-Sun">Wed-Sun</option>
            </select>
          </div>

          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="inputServiceTimeFrom"
            >
              Service Time
            </label>
            <div className="col-sm-2">
              <input
                type="text"
                className="form-control"
                id="inputServiceTimeFrom"
                placeholder="From"
                onChange={this.serviceTimeFromChange}
              />
            </div>
            <div className="col-sm-2">
              <input
                type="text"
                className="form-control"
                id="inputServiceTimeTo"
                placeholder="To"
                onChange={this.serviceTimeToChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputNotes" className="col-sm-2 col-form-label">
              Notes
            </label>
            <div className="col-sm-4">
              <textarea
                className="form-control"
                id="inputNotes"
                placeholder=""
                onChange={this.notesChange}
              ></textarea>
            </div>
          </div>

          <div className="form-group row">
            <button
              type="submit"
              className="btn btn-primary btn-lg my-1"
              onClick={this.handleSubmit}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MechanicRegistration;
