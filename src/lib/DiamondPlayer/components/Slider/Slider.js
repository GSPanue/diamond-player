import React, { Component } from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper, Input, Trail } from './styles';

class Slider extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { value: currentValue } = this.props;
    const { value: nextValue } = nextProps;

    return (currentValue !== nextValue);
  }

  handleChange({ target }) {
    const { value } = target;
    const { onChange: callback } = this.props;

    callback(value);
  }

  render() {
    const { value, step } = this.props;

    return (
      <Wrapper>
        <Input
          type="range"
          min="0"
          max="1"
          step={step}
          value={value}
          onChange={this.handleChange}
        />
        <Trail trail={value} />
      </Wrapper>
    );
  }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
