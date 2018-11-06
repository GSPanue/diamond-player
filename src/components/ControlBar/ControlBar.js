import React from 'react';

import { Wrapper } from './styles';
import { Play, Pause } from '../ControlButton';

const ControlBar = () => (
  <Wrapper>
    <Play />
    <Pause />
  </Wrapper>
);

export default ControlBar;
