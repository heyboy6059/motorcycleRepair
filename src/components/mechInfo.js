import React, { Component } from 'react';

class MechInfo extends Component {
  static defaultProps = {
    info: {
      mechName: '',
      phoneNumber: '',
      email: '',
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
      mechName, phoneNumber, email, id
    } = this.props.info;

    return (
      <div style={mstyle}>
        <div><b>{mechName}</b></div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
      </div>
    );
  }
}

export default MechInfo;
