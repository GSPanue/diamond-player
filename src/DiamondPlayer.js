import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from './components/ErrorBoundary';
import Provider from './components/Provider';
import { Wrapper, InnerWrapper } from './styles';
import Video from './components/Video';
import ControlBar from './components/ControlBar';

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
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      hd: PropTypes.bool.isRequired
    }))
  ]).isRequired,
  style: PropTypes.object
};

DiamondPlayer.defaultProps = {
  style: undefined
};

export default DiamondPlayer;
