import React from 'react';

import { Wrapper } from './styles';
import { Play, Mute, Settings, Maximize } from '../ControlButton';

const ControlBar = () => (
  <Wrapper>
    <Play />
    <Mute />
    <Settings />
    <Maximize />
  </Wrapper>
);

export default ControlBar;
