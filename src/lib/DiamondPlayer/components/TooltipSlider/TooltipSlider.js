import React, { Component } from 'react';

import { Wrapper, StyledTooltip } from './styles';
import Slider from '../Slider';

class TooltipSlider extends Component {
  constructor() {
    super();

    this.updateHorizontalBoundaries = this.updateHorizontalBoundaries.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.wrapper = React.createRef();
    this.tooltip = React.createRef();

    this.state = {
      boundary: {
        left: '0',
        right: '100'
      },
      position: '0'
    };
  }

  componentDidMount() {
    this.updateHorizontalBoundaries();
    window.addEventListener('resize', this.updateHorizontalBoundaries);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHorizontalBoundaries);
  }

  /**
   * getMousePosition: Returns the mouse position relative to the wrapper in percentage.
   */
  getMousePosition(pageX) {
    const { current: wrapper } = this.wrapper;
    const wrapperRect = wrapper.getBoundingClientRect();

    return (100 / wrapperRect.width) * (pageX - wrapperRect.left);
  }

  /**
   * updateHorizontalBoundaries: Updates the horizontal boundaries for the tooltip.
   */
  updateHorizontalBoundaries() {
    const { current: wrapper } = this.wrapper;
    const { current: tooltip } = this.tooltip;

    const wrapperRect = wrapper.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // Subtract half the width of the tooltip from the width of the wrapper
    const x1 = wrapperRect.width - (tooltipRect.width / 2);
    const x2 = wrapperRect.width;

    // Calculate the percentage change
    const percentageChange = ((x2 - x1) / x2) * 100;

    // Assign left and right boundaries in percentage
    const left = percentageChange;
    const right = 100 - percentageChange;

    this.setState({
      boundary: {
        left,
        right
      }
    });
  }

  /**
   * handleMouseMove: Positions the tooltip on a mousemove event.
   */
  handleMouseMove({ pageX }) {
    const { boundary: { left, right } } = this.state;
    let position = this.getMousePosition(pageX);

    const hasReachedLeftBoundary = (position <= left);
    const hasReachedRightBoundary = (position >= right);

    if (hasReachedLeftBoundary || hasReachedRightBoundary) {
      // Assign the position of the boundary
      position = (hasReachedLeftBoundary) ? left : right;
    }

    this.setState({ position });
  }

  render() {
    const { position } = this.state;

    return (
      <Wrapper onMouseMove={this.handleMouseMove} ref={this.wrapper}>
        <StyledTooltip title="0:00" position={position} innerRef={this.tooltip}>
          <Slider value="0.5" onChange={() => {}} />
        </StyledTooltip>
      </Wrapper>
    );
  }
}

export default TooltipSlider;
