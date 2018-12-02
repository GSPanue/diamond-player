import React, { PureComponent } from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper, Input, Trail } from './styles';

class Slider extends PureComponent {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * handleChange: Handles a change event.
   */
  handleChange({ target }) {
    const { value } = target;
    const { onChange: callback } = this.props;

    callback(value);
  }

  render() {
    const { value, ...rest } = this.props;

    return (
      <Wrapper>
        <Input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={value}
          {...rest}
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
