import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  background: ${({ background }) => background};
`;

const Video = styled.video`
  width: 100% !important;
  height: auto !important;
  display: block;
`;

export {
  Wrapper,
  Video
};
