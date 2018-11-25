import React, { Component } from 'react';

import { propTypes, defaultProps } from './types';
import { Input } from './styles';

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
    const { value } = this.props;

    return (
      <Input
        type="range"
        min="0"
        max="100"
        step="0.01"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
