import React, { PureComponent } from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper, Label } from './styles';

class Tooltip extends PureComponent {
  constructor(props) {
    super(props);

    this.shouldShowTooltip = this.shouldShowTooltip.bind(this);

    // Bind event handlers and use state for an uncontrolled tooltip
    if (props.show === undefined) {
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);

      this.state = {
        show: false
      };
    }
    // Make event handlers undefined for a controlled tooltip
    else {
      this.handleMouseEnter = undefined;
      this.handleMouseLeave = undefined;
    }
  }

  /**
   * shouldShowTooltip: Returns whether the tooltip should be shown or not.
   */
  shouldShowTooltip() {
    const { show: showProp } = this.props;

    // Return showState for an uncontrolled tooltip
    if (showProp === undefined) {
      const { show: showState } = this.state;

      return showState;
    }

    // Return showProp for a controlled tooltip
    return showProp;
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
    const { title, children, innerRef, ...rest } = this.props;
    const show = this.shouldShowTooltip();

    return (
      <Wrapper onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Label {...rest} show={show} ref={innerRef}>{title}</Label>
        {children}
      </Wrapper>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
