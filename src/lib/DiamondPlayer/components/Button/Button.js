import React from 'react';

import { propTypes } from './types';
import { Wrapper } from './styles';

const Button = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Button.propTypes = propTypes;

export default Button;
