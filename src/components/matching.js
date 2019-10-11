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
      <div className="container">
        <h2>Matchings Page</h2>
        {this.props.location.state.matchedData.map(mechanic => (
          <div class="card" style={{ marginBottom: '2em' }}>
            <h5 class="card-header list-title" style={{ color: '#f64f59' }}>
              <img
                src={require('../img/fast-forward.png')}
                style={{
                  width: '2%',
                  marginRight: '0.5em'
                }}
              />
              {mechanic.company}
            </h5>
            <div class="card-body">
              <h5 class="card-title list-title" style={{ marginBottom: '1em' }}>
                {mechanic.mechName}
              </h5>
              <p class="card-text">
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      <span className="list-font badge badge-info">
                        Licence#
                      </span>
                      <span className="list-result-font">
                        {mechanic.licence}
                      </span>
                    </div>
                    <div class="col-sm">
                      <span className="list-font badge badge-info">Phone </span>
                      <span className="list-result-font">
                        {mechanic.phoneNum}
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <span className="list-font badge badge-info">Email </span>
                      <span className="list-result-font">{mechanic.email}</span>
                    </div>
                    <div class="col-sm">
                      <span className="list-font badge badge-info">
                        Available Days{' '}
                      </span>
                      <span className="list-result-font">
                        {mechanic.availableDays}
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <span className="list-font badge badge-info">
                        Trading Hours{' '}
                      </span>
                      <span className="list-result-font">
                        From <b>{mechanic.wkHrStart.slice(0, 5)}</b> to{' '}
                        <b>{mechanic.wkHrEnd.slice(0, 5)}</b>
                      </span>
                    </div>
                    <div class="col-sm">
                      <span className="list-font badge badge-info">
                        Rating{' '}
                      </span>
                      <span className="badge badge-pill badge-warning list-result-font">
                        {mechanic.rating}
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <span className="list-font badge badge-info">
                        Distance from your address{' '}
                      </span>
                      <span className="list-result-font">
                        <b>{parseInt(mechanic.Dist / 1000)}</b> km
                      </span>
                    </div>
                  </div>
                </div>
              </p>
              <div className="container" style={{ textAlign: 'right' }}>
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
          </div>
        ))}

        {/* <MechInfoList data={this.state.information} /> */}
      </div>
    );
  }
}

export default Matching;
