import React, { Component } from 'react';

import { propTypes } from './types';
import { MuteIcon, UnmuteIcon } from './styles';
import TooltipButton from '../../TooltipButton';

class Mute extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { isMuted: currentIsMuted } = this.props;
    const { isMuted: nextIsMuted } = nextProps;

    return (currentIsMuted !== nextIsMuted);
  }

  /**
   * handleClick: Handles a click event.
   */
  handleClick() {
    const { isMuted, muteVideo, unmuteVideo } = this.props;

    (isMuted) ? unmuteVideo() : muteVideo();
  }

  render() {
    const { isMuted } = this.props;
    const tooltipTitle = (isMuted) ? 'Unmute' : 'Mute';

    return (
      <TooltipButton title={tooltipTitle} spacing="large" onClick={this.handleClick}>
        {(isMuted) ? <UnmuteIcon /> : <MuteIcon />}
      </TooltipButton>
    );
  }
}

Mute.propTypes = propTypes;

export default Mute;
