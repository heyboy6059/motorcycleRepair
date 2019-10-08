import React, { Component } from 'react';

class MechInfo extends Component {
  static defaultProps = {
    info: {
      mechName: '',
      phoneNum: '',
      email: '',
      company:'',
      availableDays:'',
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
      margin: '8px',
      background:'white'
    };

    const {
      mechName, phoneNum, email, company, availableDays, wkHrStart, wkHrEnd, rating, dist, id
    } = this.props.info;

    return (
      <div style={mstyle}>
        <div><b>{mechName}</b> ({company})</div>
        <div>{phoneNum}</div>
        <div>{email}</div>
        <div>{availableDays} / {wkHrStart} AM ~ {wkHrEnd}</div>
        <div>{rating}% satisfaction</div>
        <div>{dist}KM away from your location</div>
      </div>
    );
  }
}

export default MechInfo;
