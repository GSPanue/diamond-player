import React, { PureComponent } from 'react';

import { propTypes, defaultProps } from './types';
import Tooltip from '../Tooltip';
import Button from '../Button';

class TooltipButton extends PureComponent {
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
    const { title, align, spacing, children, ...rest } = this.props;

    return (
      <Tooltip title={title} align={align} spacing={spacing}>
        <Button {...rest} onClick={this.handleClick}>
          {children}
        </Button>
      </Tooltip>
    );
  }
}

TooltipButton.propTypes = propTypes;
TooltipButton.defaultProps = defaultProps;

export default TooltipButton;
