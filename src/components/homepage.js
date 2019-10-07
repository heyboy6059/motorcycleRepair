import React, { Component } from 'react';
import UserServiceRequest from './userServiceRequest';

class Homepage extends Component {
  render() {
    return (
      <div className = 'center-container'>
        <UserServiceRequest />
      </div>
    );
  }
}

export default Homepage;
