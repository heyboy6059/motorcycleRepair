import React, { Component } from 'react';
import * as mechanics from '../data/storeData';
import MechInfoList from './mechInfoList';


class Matching extends Component {
  id = 3
  state = {
    information: [
      {
        id: 0,
        mechName: 'Gerrad',
        company: 'Suzuki',
        phoneNum: '0329-392-192',
        email: 'fdlkk112@hotmail.com',
        availableDays: 'Mon,Tues,Wed',
        wkHrStart: '07:00',
        wkHrEnd: '17:00',
        rating: '60',
        dist: '5'
      },
      {
        id: 1,
        mechName: 'Lampard',
        company: 'Holden',
        phoneNum: '0321-323-454',
        email: 'jf109322@gmail.com',
        availableDays: 'Weekdays',
        wkHrStart: '10:00',
        wkHrEnd: '16:00',
        rating: '80',
        dist: '1'
      },
      {
        id: 2,
        mechName: 'Scholes',
        company: 'BMW',
        phoneNum: '0221-323-454',
        email: '39999dllsl@gmail.com',
        availableDays: 'Weekend',
        wkHrStart: '09:00',
        wkHrEnd: '20:00',
        rating: '20',
        dist: '10'
      }
    ]
  }
  handleCreate = (data) => {
    const { information} = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data})
    })
  }

  render() {
    return (
      <div className = "container">
        <h2>Matchings Page</h2>
        <MechInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default Matching;
