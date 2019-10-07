import React, { Component } from 'react';

class Mechanic extends Component {
  render() {
    return(
      <div>
        <h1>Mechanic Registration</h1>

        <label>Company Name</label>
        <input type="text"id="cname"name="comname"placeholder="Company name.."/>

        <br></br>

        <label>Mechanic Name</label>
        <input type="text"id="mname"name="mechname"placeholder="Mechanic name.."/>

        <br></br>

        <label>Licence Number</label>
        <input type="number"id="lnumber"name="licencenum"placeholder="Licence number.."/>

        <br></br>

        <label>Phone Number</label>
        <input type="number"id="pnumber"name="phonenum"placeholder="Phone number.."/>

        <br></br>

        <label>Address</label>
        <input type="text"id="address"name="address"placeholder="Address.."/>

        <br></br>

        <label> Service Day </label>
        <select>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <br></br>

        <label> Trading Hours </label>
        <input type="number"id="ftime"name="ftime"placeholder="0"/>

      </div>
    )
  }
}

export default Mechanic;
