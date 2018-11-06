import React, { Component } from 'react';

import { Icon } from './styles';
import Button from '../../Button';

class Play extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /**
     * ToDo: Pause the video.
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

export default Play;
