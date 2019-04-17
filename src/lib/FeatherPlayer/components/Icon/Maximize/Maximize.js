import React from 'react';

import { propTypes, defaultProps } from './types';
import { definitions as d } from './definitions';

const Maximize = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d={d.d1} />
  </svg>
);

Maximize.propTypes = propTypes;
Maximize.defaultProps = defaultProps;

export default Maximize;
