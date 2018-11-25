import React, { Component } from 'react';

import { propTypes } from './types';
import { Wrapper } from './styles';
import Slider from '../Slider';

class Volume extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { value: currentValue } = this.props;
    const { value: nextValue } = nextProps;

    return (currentValue !== nextValue);
  }

  /**
   * handleChange: Handles a change event.
   */
  handleChange(nextValue) {
    const { value: currentValue, adjustVolume } = this.props;
    const shouldAdjustVolume = (currentValue !== nextValue);

    if (shouldAdjustVolume) {
      adjustVolume(nextValue);
    }
  }

  render() {
    const { value } = this.props;

    return (
      <Wrapper>
        <Slider value={value} onChange={this.handleChange} />
      </Wrapper>
    );
  }
}

Volume.propTypes = propTypes;

export default Volume;
