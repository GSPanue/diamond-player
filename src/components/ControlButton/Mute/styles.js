import styled from 'styled-components';

import { Volume2, VolumeX } from 'react-feather';

const MuteIcon = styled(Volume2)`
  display: block;
`;

const UnmuteIcon = styled(VolumeX)`
  display: block;
`;

export {
  MuteIcon,
  UnmuteIcon
};
