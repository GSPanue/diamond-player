import React from 'react';

import { propTypes, defaultProps } from './types';

const Source = (props) => (
  <source {...props} />
);

Source.propTypes = propTypes;
Source.defaultProps = defaultProps;

export default Source;
