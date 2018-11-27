import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: block;
  
  &:hover::before {
    opacity: 1;
    transition: opacity 0.2s 0.1s ease;
  }
  
  &:hover::before {
    transform: translate(${({ align }) => ((align === 'center') ? '-50%' : '0')},0) scale(1);
  }
  
  &::before {
    position: absolute; 
    display: block;
    pointer-events: none;
    opacity: 0;
  }
  
  &::before {
    content: attr(data-tooltip);
    left: ${({ align }) => (((align === 'center') && '50%') || ((align === 'left') ? '0' : 'auto'))};
    ${({ align }) => (align === 'right') && 'right: 0'};
    bottom: 100%;
    padding: 5px 7.5px;
    margin-bottom: ${({ spacing }) => ((spacing === 'large') ? '22px' : '9px')};
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    background: #FFFFFF;
    color: #000000;
    box-shadow: 0 1px 2px rgba(0,0,0,.15);
    z-index: 2;
  }
`;

export {
  Wrapper
};
