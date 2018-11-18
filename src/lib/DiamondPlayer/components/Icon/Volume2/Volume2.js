import React from 'react';

import { propTypes, defaultProps } from './types';
import { definitions as d } from './definitions';

const Volume2 = ({ size, color, ...rest }) => (
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
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d={d.d1} />
  </svg>
);

Volume2.propTypes = propTypes;
Volume2.defaultProps = defaultProps;

export default Volume2;
