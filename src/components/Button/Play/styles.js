import styled from 'styled-components';

import { Play } from 'react-feather';

const Wrapper = styled.div`
  padding: 7px;
  cursor: pointer;
`;

const PlayIcon = styled(Play)`
  display: block;
`;

export {
  Wrapper,
  PlayIcon
};
