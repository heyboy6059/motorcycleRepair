import React, { Component } from 'react';

class MatchForm extends Component {
  state = {
    mechName: '',
    
  }
  handleChange = (e) => {
    this.setState({
      mechName: e.target.value
    })
  }
  render() {
    return (
      <form>
        <div>{this.state.mechName}</div>
      </form>
    );
  }
}

export default MatchForm;
