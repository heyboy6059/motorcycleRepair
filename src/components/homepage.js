import React, { Component } from 'react';
import UserServiceRequest from './userServiceRequest';

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <UserServiceRequest />
      </div>
    );
  }
}

export default Homepage;
