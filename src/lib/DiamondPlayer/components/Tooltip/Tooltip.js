import React, { PureComponent } from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper, Label } from './styles';

class Tooltip extends PureComponent {
  constructor() {
    super();

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      show: false
    };
  }

  /**
   * handleMouseEnter: Handles a mouseenter event.
   */
  handleMouseEnter() {
    // Show tooltip
    this.setState({ show: true });
  }

  /**
   * handleMouseLeave: Handles a mouseleave event.
   */
  handleMouseLeave() {
    // Hide tooltip
    this.setState({ show: false });
  }

  render() {
    const { state, props: { title, children, innerRef, ...rest } } = this;

    return (
      <Wrapper onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Label {...rest} {...state} ref={innerRef}>{title}</Label>
        {children}
      </Wrapper>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
