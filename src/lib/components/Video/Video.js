import React from 'react';

import { propTypes, defaultProps } from './types';
import { Wrapper } from './styles';

const Video = ({ controls, src, children, ...rest }) => {
  const hasChildren = (typeof children === 'object');

  if (hasChildren) {
    return <Wrapper {...rest} controls={false}>{children}</Wrapper>;
  }

  return <Wrapper {...rest} src={src} controls={false} />;
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
