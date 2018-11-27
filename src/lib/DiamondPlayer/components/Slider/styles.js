import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const Input = styled.input`
  appearance: none;
  width: 100%;
  height: 3px;
  padding: 0;
  margin: 0;
  outline: none;
  z-index: 3;
  background: rgba(255,255,255,.10);
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 11px;
    height: 11px;
    border: 0;
    border-radius: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,.15), 0 0 0 1px rgba(47,52,61,.2);
    background: #FFFFFF;
  }
`;

const Trail = styled.div`
  width: ${({ trail }) => trail * 98}%;
  height: 3px;
  position: absolute;
  background: #FFFFFF;
`;

export {
  Wrapper,
  Input,
  Trail
};
