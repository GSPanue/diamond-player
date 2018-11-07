import React from 'react';
import PropTypes from 'prop-types';

import Provider from './components/Provider';
import { Wrapper, InnerWrapper } from './styles';
import Video from './components/Video';
import ControlBar from './components/ControlBar';

const DiamondPlayer = ({ style, ...rest }) => (
  <Provider>
    <Wrapper style={style}>
      <InnerWrapper>
        <Video {...rest} />
        <ControlBar />
      </InnerWrapper>
    </Wrapper>
  </Provider>
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
