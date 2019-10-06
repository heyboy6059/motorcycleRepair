import React from 'react';
import axios from 'axios';

export default class userServiceRequest extends React.Component {
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

  render() {
    return (
      <div className="container">
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
              className="custom-select col-sm-4"
              id="inputServiceType"
              onChange={this.serviceTypeChange}
            >
              <option value="0">Choose...</option>
              <option value="Full">Full</option>
              <option value="Minor">Minor</option>
              <option value="Oil Check">Oil Check</option>
              <option value="Other">Other (add notes)</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary my-1"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
