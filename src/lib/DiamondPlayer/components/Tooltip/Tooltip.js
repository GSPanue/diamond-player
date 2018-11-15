import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Tooltip = ({ title, children, ...rest }) => (
  <Wrapper data-tooltip={title} {...rest}>
    {children}
  </Wrapper>
);

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

export default Tooltip;
