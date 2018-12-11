import React from 'react';

import { propTypes } from './types';
import { StyledSlider } from './styles';
import Tooltip from '../Tooltip';

const TooltipSlider = ({ hasEntered, value, onChange: handleChange, ...rest }) => (
  <Tooltip show={hasEntered} {...rest} shouldMoveHorizontally>
    <StyledSlider value={value} showThumb={hasEntered} onChange={handleChange} />
  </Tooltip>
);

TooltipSlider.propTypes = propTypes;

export default TooltipSlider;
