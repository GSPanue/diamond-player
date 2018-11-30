import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Label = styled.div`
  position: absolute;
  display: block;
  pointer-events: none;
  transform: translate(${({ align }) => ((align === 'center') ? '-50%' : '0')},0) scale(1);
  left: ${({ align }) => (((align === 'center') && '50%') || ((align === 'left') ? '0' : 'auto'))};
  ${({ align }) => (align === 'right') && 'right: 0'};
  bottom: 100%;
  padding: 5px 7.5px;
  margin-bottom: ${({ separation }) => ((separation === 'large') ? '28px' : '14px')};
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  background: #FFFFFF;
  color: #000000;
  box-shadow: 0 1px 2px rgba(0,0,0,.15);
  z-index: 2;
  transition: opacity 0.2s 0.1s ease;
  opacity: ${({ show }) => +show};
`;

export {
  Wrapper,
  Label
};
