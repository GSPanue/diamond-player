import styled from 'styled-components';

import Tooltip from '../Tooltip';

const Wrapper = styled.div`
  height: 5px;
  margin-bottom: 10px;
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
