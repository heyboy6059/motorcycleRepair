import React, { Component } from 'react';

class MechInfo extends Component {
  static defaultProps = {
    info: {
      mechName: '',
      phoneNumber: '',
      email: '',
      company:'',
      wkHrStart:'',
      wkHrEnd:'',
      rating:'',
      dist:'',
      id: 0
    }
  }


  render() {
    const mstyle = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      mechName, phoneNumber, email, company, wkHrStart, wkHrEnd, rating, dist, id
    } = this.props.info;

    return (
      <div style={mstyle}>
        <div><b>{mechName}</b> ({company})</div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
        <div>{wkHrStart} AM ~ {wkHrEnd}</div>
        <div>{rating}% satisfaction</div>
        <div>{dist}KM away from your location</div>
      </div>
    );
  }
}

export default MechInfo;
