import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
`;

export {
  Wrapper
};
