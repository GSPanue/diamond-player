import styled from 'styled-components';

import Slider from '../Slider';

const StyledSlider = styled(Slider).attrs({
  barHeight: '5px'
})`
  padding: 10px 0 ${({ showThumb }) => ((showThumb) ? '10px' : '0')} 0;
  ${({ showThumb }) => (!showThumb) && 'margin-bottom: 10px'};
  transition: padding 0.2s 0.1s ease, margin-bottom 0.2s 0.1s ease;
`;

export {
  StyledSlider
};
