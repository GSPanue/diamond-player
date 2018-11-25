import React, { Component } from 'react';

import { propTypes } from './types';
import { PlayIcon, PauseIcon } from './styles';
import TooltipButton from '../../TooltipButton';

class Play extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { isPlaying: currentIsPlaying } = this.props;
    const { isPlaying: nextIsPlaying } = nextProps;

    return (currentIsPlaying !== nextIsPlaying);
  }

  /**
   * handleClick: Handles a click event.
   */
  handleClick() {
    const { isPlaying, playVideo, pauseVideo } = this.props;

    (isPlaying) ? pauseVideo() : playVideo();
  }

  render() {
    const { isPlaying } = this.props;
    const tooltipTitle = (isPlaying) ? 'Pause' : 'Play';

    return (
      <TooltipButton title={tooltipTitle} align="left" onClick={this.handleClick}>
        {(isPlaying) ? <PauseIcon /> : <PlayIcon />}
      </TooltipButton>
    );
  }
}

Play.propTypes = propTypes;

export default Play;
