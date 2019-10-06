import React, { Component } from 'react';

class Mechanic extends Component {
  render() {
    return(
      <div>
        <h1>Mechanic Registration</h1>
        <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter Username" name="username" required>
            </input>
        </div>

        <br></br>

        <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Enter Password" name="password" required>
            </input>
        </div>

        <br></br>

        <button type="submit">SIGN IN</button>
      </div>

    )
  }
}

export default Mechanic;
