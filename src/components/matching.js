import React, { Component } from 'react';
import * as mechanics from '../data/storeData';
import MechInfoList from './mechInfoList';
import MatchForm from './matchForm';

class Matching extends Component {
  id = 3
  state = {
    information: [
      {
        id: 0,
        mechName: 'Gerrad',
        phoneNumber: '0329-392-192',
        email: 'fdlkk112@hotmail.com'
      },
      {
        id: 1,
        mechName: 'Lampard',
        phoneNumber: '0321-323-454',
        email: 'jf109322@gmail.com'
      },
      {
        id: 2,
        mechName: 'Scholes',
        phoneNumber: '0221-323-454',
        email: '39999dllsl@gmail.com'
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
        <h2>Matching Page</h2>
        <MatchForm
          onCreate={this.handleCreate}
        />
        <MechInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default Matching;
