import React, { PureComponent } from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper } from './styles';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = (props.onClick) && this.handleClick.bind(this);
  }

  /**
   * handleClick: Handles an onClick event.
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
Button.defaultProps = defaultProps;

export default Button;
