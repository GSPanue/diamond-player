import React from 'react';

import { propTypes, defaultProps } from './types';
import Tooltip from '../Tooltip';
import Button from '../Button';

const TooltipButton = ({ children, onClick: handleClick, ...rest }) => (
  <Tooltip {...rest}>
    <Button onClick={handleClick}>
      {children}
    </Button>
  </Tooltip>
);

TooltipButton.propTypes = propTypes;
TooltipButton.defaultProps = defaultProps;

export default TooltipButton;
