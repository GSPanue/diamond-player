import React from 'react';

import { Wrapper, Section } from './styles';
import { Play, Mute, Settings, Maximize } from '../ControlButton';

const ControlBar = () => (
  <Wrapper>
    <Section align="left">
      <Play />
      <Mute />
    </Section>
    <Section align="right">
      <Settings />
      <Maximize />
    </Section>
  </Wrapper>
);

export default ControlBar;
