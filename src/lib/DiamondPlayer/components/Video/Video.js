import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Video = ({ controls, src, children, ...rest }) => {
  const hasChildren = (typeof children === 'object');

  return (hasChildren) ? <Wrapper {...rest}>{children}</Wrapper> : <Wrapper {...rest} src={src} />;
};

Video.propTypes = {
  autoPlay: PropTypes.bool,
  children: PropTypes.element,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  poster: PropTypes.string,
  preload: PropTypes.oneOf([
    'auto',
    'metadata',
    'none'
  ]),
  src: PropTypes.string
};

Video.defaultProps = {
  autoPlay: false,
  children: undefined,
  controls: false,
  loop: false,
  muted: false,
  playsInline: false,
  poster: undefined,
  preload: undefined,
  src: undefined
};

export default Video;
