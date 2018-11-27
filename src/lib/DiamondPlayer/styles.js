import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 200px;
  height: 100%;
  color: #FFFFFF;
  background: #000000;
`;

const InnerWrapper = styled.div`
  max-width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 35px 15px 6px;
  left: 0;
  right: 0;
  bottom: 0;
  user-select: none;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7));
`;

export {
  Wrapper,
  InnerWrapper
};
