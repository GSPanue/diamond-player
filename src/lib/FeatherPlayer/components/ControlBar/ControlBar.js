import React from 'react';

import { Wrapper, Section, Group } from './styles';
import { Play, Mute, Settings, Maximize } from '../ControlButton';
import Volume from '../Volume';
import Time from '../Time';

const ControlBar = () => (
  <Wrapper>
    <Section align="left">
      <Play />
      <Group>
        <Mute />
        <Volume />
      </Group>
      <Time />
    </Section>
    <Section align="right">
      <Settings />
      <Maximize />
    </Section>
  </Wrapper>
);

export default ControlBar;
