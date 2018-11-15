import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip/index';
import Button from '../Button/index';

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
    const { state: { show }, props: { title, children } } = this;

    return (
      <Tooltip title={title} show={show}>
        <Button
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

TooltipButton.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func
};

TooltipButton.defaultProps = {
  onClick: undefined
};

export default TooltipButton;
