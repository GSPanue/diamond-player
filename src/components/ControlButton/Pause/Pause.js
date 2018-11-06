import React, { Component } from 'react';

import { Icon } from './styles';
import Button from '../../Button';

class Pause extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /**
     * ToDo: Play the video.
     */
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        <Icon size="22" />
      </Button>
    );
  }
}

export default Pause;
