import styled from 'styled-components';

import { Volume2, VolumeX } from '../../Icon';

const MuteIcon = styled(Volume2)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
  user-select: none;
`;

const UnmuteIcon = styled(VolumeX)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
  user-select: none;
`;

export {
  MuteIcon,
  UnmuteIcon
};
