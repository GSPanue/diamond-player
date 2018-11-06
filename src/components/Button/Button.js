import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

class Button extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: undefined
  };

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

export default Button;
