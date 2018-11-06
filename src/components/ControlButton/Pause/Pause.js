import React, { Component } from 'react';

import { Icon } from './styles';
import Button from '../../Button';

class Pause extends Component {
  handleClick = () => {
    /**
     * ToDo: (1) Bind handler to constructor, (2) Play the video.
     */
  };

  render() {
    return (
      <Button onClick={this.handleClick}>
        <Icon size="22" />
      </Button>
    );
  }
}

export default Pause;
