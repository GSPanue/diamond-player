import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { propTypes, defaultProps } from './types';
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

DiamondPlayer.propTypes = propTypes;
DiamondPlayer.defaultProps = defaultProps;

export default DiamondPlayer;
