import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class userServiceRequest extends React.Component {
  state = {
    address: '',
    make: '',
    model: '',
    year: '',
    serviceType: '',
    serviceDay: '',
    serviceTimeFrom: '',
    serviceTimeTo: '',
    notes: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    const userServiceRequestData = {
      address: this.state.address,
      make: this.state.make,
      model: this.statemodel,
      year: this.state.year,
      serviceType: this.state.serviceType,
      serviceDay: this.state.serviceDay,
      serviceTimeFrom: this.state.serviceTimeFrom,
      serviceTimeTo: this.state.serviceTimeTo,
      notes: this.state.notes
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {
        userServiceRequestData
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    this.props.history.push('/matching');
  };

  addressChange = event => {
    this.setState({
      address: event.target.value
    });
  };

  makeChange = event => {
    this.setState({
      make: event.target.value
    });
  };

  modelChange = event => {
    this.setState({
      model: event.target.value
    });
  };

  yearChange = event => {
    this.setState({
      year: event.target.value
    });
  };

  serviceTypeChange = event => {
    this.setState({
      serviceType: event.target.value
    });
  };

  serviceDayChange = event => {
    this.setState({
      serviceDay: event.target.value
    });
  };

  serviceTimeFromChange = event => {
    this.setState({
      serviceTimeFrom: event.target.value
    });
  };

  serviceTimeToChange = event => {
    this.setState({
      serviceTimeTo: event.target.value
    });
  };

  notesChange = event => {
    this.setState({
      notes: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Service Request</h2>
        <form>
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
            <label htmlFor="inputMake" className="col-sm-2 col-form-label">
              Make
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputMake"
                placeholder="e.g. Honda"
                onChange={this.makeChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputModel" className="col-sm-2 col-form-label">
              Model
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputModel"
                placeholder="e.g. CB300R"
                onChange={this.modelChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputYear" className="col-sm-2 col-form-label">
              Year
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="inputYear"
                placeholder="e.g. 2018"
                onChange={this.yearChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="inputServiceType"
            >
              Service Type
            </label>
            <select
              className="custom-select col-sm-3"
              id="inputServiceType"
              onChange={this.serviceTypeChange}
              style={{ marginLeft: '1em' }}
            >
              <option value="0">Choose...</option>
              <option value="Full">Full</option>
              <option value="Minor">Minor</option>
              <option value="Oil Check">Oil Check</option>
              <option value="Other">Other (add notes)</option>
            </select>
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
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
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
              Request
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(userServiceRequest);
