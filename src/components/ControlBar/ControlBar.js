import React, { Component } from 'react';

import { Wrapper } from './styles';
import { Play, Pause, Mute, Unmute, Settings, Minimize, Maximize } from '../ControlButton';

class ControlBar extends Component {
  constructor() {
    super();

    this.state = {
      showPlayButton: true,
      showMuteButton: true,
      showMaximizeButton: true
    };
  }

  render() {
    const { showPlayButton, showMuteButton, showMaximizeButton } = this.state;

    return (
      <Wrapper>
        {(showPlayButton) ? <Play /> : <Pause />}
        {(showMuteButton) ? <Mute /> : <Unmute />}
        <Settings />
        {(showMaximizeButton) ? <Maximize /> : <Minimize />}
      </Wrapper>
    );
  }
}

export default ControlBar;
