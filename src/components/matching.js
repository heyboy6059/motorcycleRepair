import React, { Component } from 'react';
import * as mechanics from '../data/storeData';
import MechInfoList from './mechInfoList';
import axios from 'axios';

class Matching extends Component {
  state = {
    matchedMechanics: []
  };

  render() {
    return (
      <div className="center-container">
        <div className="container">
          <h2>Matching Page</h2>
          {this.props.location.state.matchedData.map(mechanic => (
            <div class="card" style={{ marginBottom: '2em' }}>
              <h5 class="card-header list-title" style={{ color: '#f64f59' }}>
                <img
                  src={require('../img/fast-forward.png')}
                  style={{ width: '2%', marginRight: '0.5em' }}
                />
                {mechanic.company}
              </h5>
              <div class="card-body">
                <h5 class="card-title list-title">{mechanic.mechName}</h5>
                <p class="card-text">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm">
                        <span className="list-font">Licence# </span>
                        <span className="list-result-font">
                          {mechanic.licence}
                        </span>
                      </div>
                      <div class="col-sm">
                        <span className="list-font">Phone </span>
                        <span className="list-result-font">
                          {mechanic.phoneNum}
                        </span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <span className="list-font">Email </span>
                        <span className="list-result-font">{mechanic.email}</span>
                      </div>
                      <div class="col-sm">
                        <span className="list-font">Available Days </span>
                        <span className="list-result-font">
                          {mechanic.availableDays}
                        </span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <span className="list-font">Trading Hours </span>
                        <span className="list-result-font">
                          From
                          {mechanic.wkHrStart} to
                          {mechanic.wkHrEnd}
                        </span>
                      </div>
                      <div class="col-sm">
                        <span className="list-font">Rating </span>
                        <span className="badge badge-pill badge-warning list-result-font">
                          {mechanic.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </p>
                <a
                  // href={'mailto:' + mechanic.email}
                  href={'tel:' + mechanic.phoneNum}
                  target="_top"
                  class="btn btn-lg btn-primary"
                >
                  Book with phone
                </a>
                <a
                  style={{ marginLeft: '1.5em' }}
                  href={'mailto:' + mechanic.email}
                  target="_top"
                  class="btn btn-lg btn-primary"
                >
                  Book with email
                </a>
              </div>
            </div>
          ))}

          {/* <MechInfoList data={this.state.information} /> */}
        </div>
      </div>
    );
  }
}

export default Matching;
