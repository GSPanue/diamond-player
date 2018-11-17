import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import store from './store';

import { Wrapper } from './styles';
import Video from './components/Video';
import ControlBar from './components/ControlBar';

const DiamondPlayer = ({ style, ...rest }) => (
  <Provider store={store}>
    <Wrapper style={style}>
      <Video {...rest} />
      <ControlBar />
    </Wrapper>
  </Provider>
);

DiamondPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
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
  src: PropTypes.string,
  style: PropTypes.object
};

DiamondPlayer.defaultProps = {
  autoPlay: false,
  children: undefined,
  controls: false,
  loop: false,
  muted: false,
  playsInline: false,
  poster: undefined,
  preload: undefined,
  src: undefined,
  style: undefined
};

export default DiamondPlayer;
