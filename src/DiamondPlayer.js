import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Video from './components/Video';

const DiamondPlayer = ({ width, height, style, ...rest }) => (
  <Wrapper maxWidth={width} maxHeight={height} style={style}>
    <Video {...rest} />
  </Wrapper>
);

DiamondPlayer.propTypes = {
  height: PropTypes.string,
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  style: PropTypes.object,
  width: PropTypes.string
};

DiamondPlayer.defaultProps = {
  height: '100%',
  style: undefined,
  width: '100%'
};

export default DiamondPlayer;
