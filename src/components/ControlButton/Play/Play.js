import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withContext from '../../withContext';
import { PlayIcon, PauseIcon } from './styles';
import TooltipButton from '../../TooltipButton';

export class Play extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { context: { play: currentPlay } } = this.props;
    const { context: { play: nextPlay } } = nextProps;

    return (currentPlay !== nextPlay);
  }

  /**
   * handleClick: Handles an onClick event.
   */
  handleClick() {
    const { context } = this.props;
    const { actions: { togglePlay } } = context;

    togglePlay();
  }

  render() {
    const { context: { play: showPauseIcon } } = this.props;
    const tooltipTitle = (showPauseIcon) ? 'Pause' : 'Play';

    return (
      <TooltipButton title={tooltipTitle} onClick={this.handleClick}>
        {(showPauseIcon) ? <PauseIcon size="22" /> : <PlayIcon size="22" />}
      </TooltipButton>
    );
  }
}

Play.propTypes = {
  context: PropTypes.object.isRequired
};

export default withContext(Play);
