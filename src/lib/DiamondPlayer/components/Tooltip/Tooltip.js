import React from 'react';

import { propTypes } from './types';
import { Wrapper } from './styles';

const Tooltip = ({ title, children, ...rest }) => (
  <Wrapper data-tooltip={title} {...rest}>
    {children}
  </Wrapper>
);

Tooltip.propTypes = propTypes;

export default Tooltip;
