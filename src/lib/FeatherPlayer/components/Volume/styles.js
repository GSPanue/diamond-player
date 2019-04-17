import styled from 'styled-components';

import Slider from '../Slider';

const Wrapper = styled.div`
  width: 56px;
`;

const StyledSlider = styled(Slider).attrs({
  innerWrapperHeight: '19px'
})``;

export {
  Wrapper,
  StyledSlider
};
