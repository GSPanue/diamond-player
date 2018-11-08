import styled from 'styled-components';

import { Play, Pause } from 'react-feather';

const PlayIcon = styled(Play)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
`;

const PauseIcon = styled(Pause)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
`;

export {
  PlayIcon,
  PauseIcon
};
