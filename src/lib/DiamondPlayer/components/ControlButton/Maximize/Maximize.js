import React, { Component } from 'react';

import { propTypes } from './types';
import { MaximizeIcon, MinimizeIcon } from './styles';
import TooltipButton from '../../TooltipButton';

class Maximize extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { isMaximized: currentIsMaximized } = this.props;
    const { isMaximized: nextIsMaximized } = nextProps;

    return (currentIsMaximized !== nextIsMaximized);
  }

  /**
   * handleClick: Handles an onClick event.
   */
  handleClick() {
    const { isMaximized, maximizeVideo, minimizeVideo } = this.props;

    (isMaximized) ? minimizeVideo() : maximizeVideo();
  }

  render() {
    const { isMaximized } = this.props;
    const tooltipTitle = (isMaximized) ? 'Exit Fullscreen' : 'Enter Fullscreen';

    return (
      <TooltipButton title={tooltipTitle} onClick={this.handleClick}>
        {(isMaximized) ? <MinimizeIcon /> : <MaximizeIcon />}
      </TooltipButton>
    );
  }
}

Maximize.propTypes = propTypes;

export default Maximize;
