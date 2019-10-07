import React, { Component } from 'react';
import MechInfo from './mechInfo';

class MechInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      info => (<MechInfo key={info.id} info={info}/>)
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default MechInfoList;
