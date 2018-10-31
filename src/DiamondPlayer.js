import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Video } from './styles';

const DiamondPlayer = ({ width, height, background, src, ...rest }) => (
  <Wrapper maxWidth={width} maxHeight={height} background={background}>
    <Video {...rest}>
      <source src={src} />
    </Video>
  </Wrapper>
);

DiamondPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  background: PropTypes.string,
  controls: PropTypes.bool,
  height: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  preload: PropTypes.oneOf([
    'auto',
    'metadata',
    'none'
  ]),
  src: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string
};

DiamondPlayer.defaultProps = {
  autoPlay: false,
  background: 'transparent',
  controls: false,
  height: '100%',
  loop: false,
  muted: false,
  poster: undefined,
  preload: undefined,
  src: undefined,
  style: undefined,
  width: '100%'
};

export default DiamondPlayer;
