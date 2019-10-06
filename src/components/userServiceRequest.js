import React from 'react';

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

  render() {
    return (
      <div className="container">
        <form>
          <div class="form-group row">
            <label for="inputAddress" class="col-sm-2 col-form-label">
              Address
            </label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="e.g. 1 main st, St Lucia QLD 4067"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputMake" class="col-sm-2 col-form-label">
              Make
            </label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="inputMake"
                placeholder="e.g. Honda"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputModel" class="col-sm-2 col-form-label">
              Model
            </label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="inputModel"
                placeholder="e.g. CB300R"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputYear" class="col-sm-2 col-form-label">
              Year
            </label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="inputYear"
                placeholder="e.g. 2018"
              />
            </div>
          </div>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label" for="inputServiceType">
              Service Type
            </label>
            <select class="custom-select col-sm-4" id="inputServiceType">
              <option selected>Choose...</option>
              <option value="1">Full</option>
              <option value="2">Minor</option>
              <option value="3">Oil Check</option>
              <option value="3">Other (add notes)</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
