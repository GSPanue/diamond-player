import React, { Component } from 'react';

import { propTypes } from './types';
import { Wrapper, StyledSlider } from './styles';

class Volume extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { value: currentValue, isMuted: currentIsMuted } = this.props;
    const { value: nextValue, isMuted: nextIsMuted } = nextProps;

    return (currentValue !== nextValue) || (currentIsMuted !== nextIsMuted);
  }

  /**
   * handleChange: Handles a change event.
   */
  handleChange(value) {
    const { adjustVolume } = this.props;

    adjustVolume(value);
  }

  render() {
    const { value, isMuted } = this.props;

    return (
      <Wrapper>
        <StyledSlider
          value={(isMuted) ? 0 : value}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

Volume.propTypes = propTypes;

export default Volume;
