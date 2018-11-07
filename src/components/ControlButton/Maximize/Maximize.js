import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withContext from '../../withContext';
import { MaximizeIcon, MinimizeIcon } from './styles';
import Button from '../../Button';

export class Maximize extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { context: { maximize: currentMaximize } } = this.props;
    const { context: { maximize: nextMaximize } } = nextProps;

    return (currentMaximize !== nextMaximize);
  }

  /**
   * handleClick: Handles an onClick event.
   */
  handleClick() {
    const { context } = this.props;
    const { actions: { toggleMaximize } } = context;

    toggleMaximize();
  }

  render() {
    const { context: { maximize: showMinimizeIcon } } = this.props;

    return (
      <Button onClick={this.handleClick}>
        {(showMinimizeIcon) ? <MinimizeIcon size="22" /> : <MaximizeIcon size="22" />}
      </Button>
    );
  }
}

Maximize.propTypes = {
  context: PropTypes.object.isRequired
};

export default withContext(Maximize);
