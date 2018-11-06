import React, { Component } from 'react';

import { Wrapper } from './styles';
import { Play, Pause, Settings, Minimize, Maximize } from '../ControlButton';

class ControlBar extends Component {
  constructor() {
    super();

    this.state = {
      showPlayButton: true,
      showMaximizeButton: true
    };
  }

  render() {
    const { showPlayButton, showMaximizeButton } = this.state;

    return (
      <Wrapper>
        {(showPlayButton) ? <Play /> : <Pause />}
        <Settings />
        {(showMaximizeButton) ? <Maximize /> : <Minimize />}
      </Wrapper>
    );
  }
}

export default ControlBar;
