import styled from 'styled-components';

import { Maximize, Minimize } from 'react-feather';

const MaximizeIcon = styled(Maximize)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
`;

const MinimizeIcon = styled(Minimize)`
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
`;

export {
  MaximizeIcon,
  MinimizeIcon
};
