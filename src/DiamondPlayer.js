import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Video from './components/Video';

const DiamondPlayer = ({ style, ...rest }) => (
  <Wrapper style={style}>
    <Video {...rest} />
  </Wrapper>
);

DiamondPlayer.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  style: PropTypes.object
};

DiamondPlayer.defaultProps = {
  style: undefined
};

export default DiamondPlayer;
