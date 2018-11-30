import styled from 'styled-components';

import Tooltip from '../Tooltip';

const Wrapper = styled.div`
  height: 100%;
`;

const StyledTooltip = styled(Tooltip).attrs(({ position }) => ({
  style: {
    left: `${position}%`
  }
}))``;

export {
  Wrapper,
  StyledTooltip
};
