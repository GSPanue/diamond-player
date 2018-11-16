import React, { Fragment } from 'react';

import { GlobalStyle, Wrapper } from './styles';
import DiamondPlayer from '..';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <DiamondPlayer src="" />
    </Wrapper>
  </Fragment>
);

export default App;
