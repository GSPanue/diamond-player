import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from './components/ErrorBoundary/index';
import Provider from './components/Provider/index';
import { Wrapper, InnerWrapper } from './styles';
import Video from './components/Video/index';
import ControlBar from './components/ControlBar/index';

const DiamondPlayer = ({ style, ...rest }) => (
  <ErrorBoundary>
    <Provider>
      <Wrapper style={style}>
        <InnerWrapper>
          <Video {...rest} />
          <ControlBar />
        </InnerWrapper>
      </Wrapper>
    </Provider>
  </ErrorBoundary>
);

DiamondPlayer.propTypes = {
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
