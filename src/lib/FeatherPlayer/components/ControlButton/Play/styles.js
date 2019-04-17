import styled from 'styled-components';

import { Play, Pause } from '../../Icon';

const PlayIcon = styled(Play)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
  user-select: none;
`;

const PauseIcon = styled(Pause)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
  user-select: none;
`;

export {
  PlayIcon,
  PauseIcon
};
