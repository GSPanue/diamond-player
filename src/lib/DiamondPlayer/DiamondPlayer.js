import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { propTypes, defaultProps } from './types';
import { Wrapper, InnerWrapper } from './styles';
import Video from './components/Video';
import ControlBar from './components/ControlBar';
import ProgressBar from './components/ProgressBar';

const DiamondPlayer = ({ style, ...rest }) => (
  <Provider store={store}>
    <Wrapper style={style}>
      <Video {...rest} />
      <InnerWrapper>
        <ProgressBar />
        <ControlBar />
      </InnerWrapper>
    </Wrapper>
  </Provider>
);

DiamondPlayer.propTypes = propTypes;
DiamondPlayer.defaultProps = defaultProps;

export default DiamondPlayer;
