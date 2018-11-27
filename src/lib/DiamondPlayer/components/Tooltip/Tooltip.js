import React from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper } from './styles';

const Tooltip = ({ title, children, type, ...rest }) => (
  <Wrapper data-tooltip={title} {...rest}>
    {children}
  </Wrapper>
);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
