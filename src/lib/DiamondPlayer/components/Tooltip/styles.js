import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: block;
  
  &:hover::before, &:hover::after {
    opacity: 1;
    transition: opacity 0.2s 0.1s ease;
  }
  
  &:hover::before {
    transform: translate(${({ align }) => ((align === 'center') ? '-50%' : '0')},0) scale(1);
  }
  
  &:hover::after {
    transform: translate(-50%,0) scale(1);
  }
  
  &::before, &::after {
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
    margin-bottom: 9px;
    border-radius: 3px;
    font-size: 13px;
    font-weight: bold;
    white-space: nowrap;
    background: #FFFFFF;
    color: #000000;
    box-shadow: 0 1px 2px rgba(0,0,0,.15);
    z-index: 2;
  }
  
  &::after {
    content: '';
    left: 50%;
    bottom: 100%;
    height: 0;
    width: 0;
    margin-bottom: 5px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #FFFFFF;
    z-index: 3;
  }
`;

export {
  Wrapper
};
