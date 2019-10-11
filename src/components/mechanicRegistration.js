import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MechanicRegistration extends Component {
  state = {
    company: '',
    mechName: '',
    licence: '',
    address: '',
    phoneNum: '',
    availableDays: '',
    wkHrStart: '',
    wkHrEnd: '',
    email: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    const mechanicRegistrationData = {
      company: this.state.company,
      mechName: this.state.mechName,
      licence: this.state.licence,
      address: this.state.address,
      phoneNum: this.state.phoneNum,
      availableDays: this.state.availableDays,
      wkHrStart: this.state.wkHrStart,
      wkHrEnd: this.state.wkHrEnd,
      email: this.state.email
    };

    let axiosConfig = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };

    axios
      .post(
        // 'https://infs3208-30.appspot.com/mecCreate',
        'http://localhost:8080/mecCreate',

        mechanicRegistrationData,
        axiosConfig
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.props.history.push('/alert');
  };

  companyChange = event => {
    this.setState({
      company: event.target.value
    });
  };

  mechanicChange = event => {
    this.setState({
      mechName: event.target.value
    });
  };

  licenceChange = event => {
    this.setState({
      licence: event.target.value
    });
  };

  addressChange = event => {
    this.setState({
      address: event.target.value
    });
  };

  phoneChange = event => {
    this.setState({
      phoneNum: event.target.value
    });
  };

  serviceDayChange = event => {
    this.setState({
      availableDays: event.target.value
    });
  };

  serviceTimeFromChange = event => {
    this.setState({
      wkHrStart: event.target.value
    });
  };

  serviceTimeToChange = event => {
    this.setState({
      wkHrEnd: event.target.value
    });
  };

  emailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <div className="center-container">
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
                  id="inputLicence"
                  placeholder="e.g. ABCD12345"
                  onChange={this.licenceChange}
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
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="e.g. jonedoe@gmail.com"
                  onChange={this.emailChange}
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

            {/* <div className="form-group row">
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
            </div> */}

            <div className="form-group row">
              <div className="btn2">
                <Link to="/alert">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg my-1"
                    to="/alert"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MechanicRegistration;
