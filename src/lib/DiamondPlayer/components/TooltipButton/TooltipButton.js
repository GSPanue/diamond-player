import React, { PureComponent } from 'react';

import { propTypes, defaultProps } from './types';
import Tooltip from '../Tooltip';
import Button from '../Button';

class TooltipButton extends PureComponent {
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
    const { props: { title, align, children, ...rest } } = this;

    return (
      <Tooltip title={title} align={align}>
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
