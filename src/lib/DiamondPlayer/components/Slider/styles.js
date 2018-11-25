import styled from 'styled-components';

const Input = styled.input`
  appearance: none;
  width: 100%;
  height: 3px;
  padding: 0;
  margin: 0;
  outline: none;
  background: rgba(255,255,255,.10);
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 13px;
    height: 13px;
    border: 0;
    border-radius: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,.15), 0 0 0 1px rgba(47,52,61,.2);
    background: #FFFFFF;
  }
`;

export {
  Input
};
