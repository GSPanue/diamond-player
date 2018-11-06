import React, { Component } from 'react';

import { Wrapper } from './styles';
import { Play, Pause } from '../ControlButton';

class ControlBar extends Component {
  constructor() {
    super();

    this.state = {
      showPlayButton: true
    };
  }

  render() {
    const { showPlayButton } = this.state;

    return (
      <Wrapper>
        {(showPlayButton) ? <Play /> : <Pause />}
      </Wrapper>
    );
  }
}

export default ControlBar;
