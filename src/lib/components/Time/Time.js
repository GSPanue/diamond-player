import React from 'react';

import { propTypes } from './types';
import { Wrapper } from './styles';

const Time = ({ currentTime, duration }) => (
  <Wrapper>{`${currentTime} / ${duration}`}</Wrapper>
);

Time.propTypes = propTypes;

export default Time;
