import styled from 'styled-components';

import { Volume2, VolumeX } from 'react-feather';

const MuteIcon = styled(Volume2)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
`;

const UnmuteIcon = styled(VolumeX)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
`;

export {
  MuteIcon,
  UnmuteIcon
};
