import React from 'react';

import { Wrapper, Section, Group } from './styles';
import { Play, Mute, Settings, Maximize } from '../ControlButton';
import Volume from '../Volume';

const ControlBar = () => (
  <Wrapper>
    <Section align="left">
      <Play />
      <Group>
        <Mute />
        <Volume />
      </Group>
    </Section>
    <Section align="right">
      <Settings />
      <Maximize />
    </Section>
  </Wrapper>
);

export default ControlBar;
