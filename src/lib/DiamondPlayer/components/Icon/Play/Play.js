import React from 'react';

import { propTypes, defaultProps } from './types';

const Play = ({ size, color, ...rest }) => (
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
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

Play.propTypes = propTypes;
Play.defaultProps = defaultProps;

export default Play;
