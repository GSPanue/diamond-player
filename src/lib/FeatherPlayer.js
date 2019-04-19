import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { propTypes, defaultProps } from './types';
import { Wrapper, InnerWrapper } from './styles';
import Video from './components/Video';
import ControlBar from './components/ControlBar';
import ProgressBar from './components/ProgressBar';

const FeatherPlayer = ({ style, ...rest }) => (
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

FeatherPlayer.propTypes = propTypes;
FeatherPlayer.defaultProps = defaultProps;

export default FeatherPlayer;
