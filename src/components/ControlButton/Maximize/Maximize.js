import React, { Component } from 'react';

import { Icon } from './styles';
import Button from '../../Button';

class Maximize extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /**
     * ToDo: Enter fullscreen.
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

export default Maximize;
