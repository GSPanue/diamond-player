import React from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper } from './styles';

const Video = ({ controls, src, children, ...rest }) => {
  const hasChildren = (typeof children === 'object');

  return (hasChildren) ? <Wrapper {...rest}>{children}</Wrapper> : <Wrapper {...rest} src={src} />;
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
