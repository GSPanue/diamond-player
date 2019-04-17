import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 7px 0;
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: ${({ innerWrapperHeight }) => (innerWrapperHeight || '100%')};
  position: relative;
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  width: 100%;
  height: ${({ barHeight }) => (barHeight || '3px')};
  padding: 0;
  margin: 0;
  outline: none;
  z-index: 3;
  background: rgba(255,255,255,.10);
`;

const Trail = styled.div.attrs(({ position, boundary }) => ({
  style: {
    width: `${(position * (boundary.right - boundary.left)) + boundary.left}%`
  }
}))`
  height: ${({ trailHeight }) => (trailHeight || '3px')};
  position: absolute;
  display: flex;
  align-items: center;
  background: #FFFFFF;
`;

const Thumb = styled.div`
  right: -5px;
  height: 11px;
  width: 11px;
  position: absolute;
  border: 0;
  border-radius: 100%;
  box-shadow: 0 1px 1px rgba(0,0,0,.15), 0 0 0 1px rgba(47,52,61,.2);
  background: #FFFFFF;
  opacity: ${({ showThumb }) => +showThumb};
  transition: opacity 0.2s 0.1s ease;
`;

export {
  Wrapper,
  InnerWrapper,
  Bar,
  Trail,
  Thumb
};
