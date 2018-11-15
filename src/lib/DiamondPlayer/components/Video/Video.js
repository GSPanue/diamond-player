import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Video = ({ controls, source, ...rest }) => (
  (typeof source === 'string') ? <Wrapper {...rest} src={source} /> : (
    <Wrapper {...rest}>
      {source.map((src) => <source key={src.id} src={src.src} type={src.type} />)}
    </Wrapper>
  )
);

Video.propTypes = {
  autoPlay: PropTypes.bool,
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
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired
};

Video.defaultProps = {
  autoPlay: false,
  controls: false,
  loop: false,
  muted: false,
  playsInline: false,
  poster: undefined,
  preload: undefined
};

export default Video;
