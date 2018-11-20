import React from 'react';

import { Wrapper, LeftControls, RightControls } from './styles';
import { Play, Mute, Settings, Maximize } from '../ControlButton';

const ControlBar = () => (
  <Wrapper>
    <LeftControls>
      <Play />
      <Mute />
    </LeftControls>
    <RightControls>
      <Settings />
      <Maximize />
    </RightControls>
  </Wrapper>
);

export default ControlBar;
