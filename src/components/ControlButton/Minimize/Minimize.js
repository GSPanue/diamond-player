import React, { Component } from 'react';

import { Icon } from './styles';
import Button from '../../Button';

class Minimize extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /**
     * ToDo: Exit fullscreen.
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

export default Minimize;
