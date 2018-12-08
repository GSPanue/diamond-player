import React, { PureComponent } from 'react';

import { getMousePosition, getHorizontalBoundaries } from '../../helpers';

import { propTypes, defaultProps } from './types';
import { Wrapper, InnerWrapper, Bar, Trail, Thumb } from './styles';

class Slider extends PureComponent {
  constructor() {
    super();

    this.wrapper = React.createRef();
    this.thumb = React.createRef();

    this.handleResize = this.handleResize.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.state = {
      mouseDown: false,
      boundary: {
        left: 0,
        right: 100
      }
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  /**
   * handleResize: Handles a resize event.
   */
  handleResize() {
    const { current: wrapper } = this.wrapper;
    const { current: thumb } = this.thumb;

    // Get wrapper boundaries
    const boundary = getHorizontalBoundaries(wrapper, thumb);

    this.setState({
      boundary
    });
  }

  /**
   * handleMouseDown: Handles a mousedown event.
   */
  handleMouseDown({ pageX }) {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    this.handleChange(pageX);
    this.setState({ mouseDown: true });
  }

  /**
   * handleMouseUp: Handles a mouseup event.
   */
  handleMouseUp() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState({ mouseDown: false });
  }

  /**
   * handleMouseMove: Handles a mousemove event.
   */
  handleMouseMove({ pageX }) {
    const { mouseDown } = this.state;

    if (mouseDown) {
      this.handleChange(pageX);
    }
  }

  /**
   * handleChange: Handles a value change.
   */
  handleChange(pageX) {
    const { value: currentValue, onChange: callback } = this.props;
    const nextValue = this.positionToValue(pageX);

    const hasChangedValue = (currentValue !== nextValue);

    if (hasChangedValue) {
      callback(nextValue);
    }
  }

  /**
   * positionToValue: Converts mouse position to a slider value.
   */
  positionToValue(pageX) {
    const { current: wrapper } = this.wrapper;
    const { boundary } = this.state;

    // Get mouse position relative to the wrapper in percentage
    const position = getMousePosition(wrapper, boundary, pageX);

    // Subtract left from position and right boundary
    // This gives a range of 0 - 80
    const x1 = (position - boundary.left);
    const x2 = (boundary.right - boundary.left);

    // Return a slider value between 0.00 and 1.00
    return Math.round((x1 / x2) * 1e2) / 1e2;
  }

  render() {
    const { value, innerWrapperHeight, barHeight, showThumb, ...rest } = this.props;
    const { boundary } = this.state;

    return (
      <Wrapper
        {...rest}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        ref={this.wrapper}
      >
        <InnerWrapper innerWrapperHeight={innerWrapperHeight}>
          <Bar barHeight={barHeight} />
          <Trail position={value} trailHeight={barHeight} boundary={boundary}>
            <Thumb position={value} showThumb={showThumb} ref={this.thumb} />
          </Trail>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
