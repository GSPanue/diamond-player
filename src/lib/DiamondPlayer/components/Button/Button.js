import React, { PureComponent } from 'react';

import { propTypes } from './types';
import { Wrapper } from './styles';

class Button extends PureComponent {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * handleClick: Handles a click event.
   */
  handleClick() {
    const { onClick: callback } = this.props;

    callback();
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <Wrapper {...rest} onClick={this.handleClick}>
        {children}
      </Wrapper>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
