import React from 'react';

import { propTypes, defaultProps } from './types';
import { definitions as d } from './definitions';

const Settings = ({ size, color, ...rest }) => (
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
    <circle cx="12" cy="12" r="3" />
    <path d={d.d1} />
  </svg>
);

Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;

export default Settings;
