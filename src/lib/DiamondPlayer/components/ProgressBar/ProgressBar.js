import React, { Component } from 'react';

import { Wrapper } from './styles';
import TooltipSlider from '../TooltipSlider';

class ProgressBar extends Component {
  constructor() {
    super();

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      hasEntered: false
    };
  }

  handleMouseEnter() {
    this.setState({ hasEntered: true });
  }

  handleMouseLeave() {
    this.setState({ hasEntered: false });
  }

  /**
   * handleChange: Handles a change event.
   */
  handleChange(value) {
    console.log(value);
    /**
     * ToDo: Set current time
     */
  }

  render() {
    const { state } = this;

    return (
      <Wrapper>
        <TooltipSlider
          title="0:00"
          value={0.50}
          {...state}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default ProgressBar;
