import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 0;
  right: 0;
  bottom: 0;
  flex-wrap: wrap;
  padding: 35px 15px 10px;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7));
  user-select: none;
`;

const LeftControls = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
`;

const RightControls = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export {
  Wrapper,
  LeftControls,
  RightControls
};
