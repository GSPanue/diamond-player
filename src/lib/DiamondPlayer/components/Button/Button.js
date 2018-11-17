import React, { PureComponent } from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper } from './styles';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = (props.onClick) && this.handleClick.bind(this);
    this.handleMouseEnter = (props.onMouseEnter) && this.handleMouseEnter.bind(this);
    this.handleMouseLeave = (props.onMouseLeave) && this.handleMouseLeave.bind(this);
  }

  /**
   * handleClick: Handles an onClick event.
   */
  handleClick() {
    const { onClick: callback } = this.props;

    callback();
  }

  /**
   * handleMouseEnter: Handles an onMouseEnter event.
   */
  handleMouseEnter() {
    const { onMouseEnter: callback } = this.props;

    callback();
  }

  /**
   * handleMouseLeave: Handles an onMouseLeave event.
   */
  handleMouseLeave() {
    const { onMouseLeave: callback } = this.props;

    callback();
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <Wrapper
        {...rest}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </Wrapper>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
