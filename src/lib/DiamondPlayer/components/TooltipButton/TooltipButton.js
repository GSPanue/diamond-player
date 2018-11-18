import React, { PureComponent } from 'react';

import { propTypes, defaultProps } from './types';
import Tooltip from '../Tooltip';
import Button from '../Button';

class TooltipButton extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = (props.onClick) && this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      show: false
    };
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
    // Show tooltip
    this.setState({ show: true });
  }

  /**
   * handleMouseLeave: Handles an onMouseLeave event.
   */
  handleMouseLeave() {
    // Hide tooltip
    this.setState({ show: false });
  }

  render() {
    const { state: { show }, props: { title, children, ...rest } } = this;

    return (
      <Tooltip title={title} show={show}>
        <Button
          {...rest}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {children}
        </Button>
      </Tooltip>
    );
  }
}

TooltipButton.propTypes = propTypes;
TooltipButton.defaultProps = defaultProps;

export default TooltipButton;
