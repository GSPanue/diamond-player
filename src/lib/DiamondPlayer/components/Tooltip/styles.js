import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  
  &::before, &::after {
    position: absolute;
    opacity: ${({ show }) => ((show) ? 1 : 0)};
    transition: opacity 0.2s 0.05s ease;
  }
  
  &::before {
    content: "";
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #FFFFFF;
    top: 25px;
    z-index: 3;
  }
  
  &&:after {
    content: attr(data-tooltip);
    background: #FFFFFF;
    top: 25px;
    font-size: 13px;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0,0,0,.15);
    color: #000000;
    padding: 5px 7.5px;
    transform: translateY(-100%);
    white-space: nowrap;
    z-index: 2;
    font-weight: bold;
  }
`;

export {
  Wrapper
};
