import React, { PureComponent } from 'react';

import { isUndefined, isDefined, getMousePosition, getHorizontalBoundaries } from '../../helpers';

import { propTypes, defaultProps } from './types';
import { Wrapper, Label } from './styles';

class Tooltip extends PureComponent {
  constructor(props) {
    super(props);

    this.shouldShowTooltip = this.shouldShowTooltip.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    // Controlled tooltip
    this.state = {
      position: undefined
    };

    // Uncontrolled tooltip
    if (isUndefined(props.show)) {
      this.state = {
        show: false
      };
    }

    // Horizontal moving tooltip
    if (props.shouldMoveHorizontally) {
      this.wrapper = React.createRef();
      this.label = React.createRef();

      this.handleResize = this.handleResize.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);

      this.state = {
        show: false,
        boundary: {
          left: 0,
          right: 100
        },
        position: 0
      };
    }
    else {
      this.wrapper = undefined;
      this.label = undefined;

      this.handleResize = undefined;
      this.handleMouseMove = undefined;
    }
  }

  componentDidMount() {
    const { shouldMoveHorizontally } = this.props;

    if (shouldMoveHorizontally) {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    const { shouldMoveHorizontally } = this.props;

    if (shouldMoveHorizontally) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  /**
   * shouldShowTooltip: Returns whether the tooltip should be shown or not.
   */
  shouldShowTooltip() {
    const { show: showProp } = this.props;

    // Return showState for an uncontrolled tooltip
    if (isUndefined(showProp)) {
      const { show: showState } = this.state;

      return showState;
    }

    // Return showProp for a controlled tooltip
    return showProp;
  }

  /**
   * handleResize: Handles a resize event.
   */
  handleResize() {
    const { current: wrapper } = this.wrapper;
    const { current: label } = this.label;

    const boundary = getHorizontalBoundaries(wrapper, label);

    this.setState({
      boundary
    });
  }

  /**
   * handleMouseMove: Handles a mousemove event.
   */
  handleMouseMove({ pageX }) {
    const { current: wrapper } = this.wrapper;
    const { boundary } = this.state;

    const position = getMousePosition(wrapper, boundary, pageX);

    this.setState({
      position
    });
  }

  /**
   * handleMouseEnter: Handles a mouseenter event.
   */
  handleMouseEnter() {
    const { show } = this.props;

    // Call callback for a controlled tooltip
    if (isDefined(show)) {
      const { onMouseEnter: callback } = this.props;

      callback();
    }
    else {
      // Show tooltip
      this.setState({ show: true });
    }
  }

  /**
   * handleMouseLeave: Handles a mouseleave event.
   */
  handleMouseLeave() {
    const { show } = this.props;

    // Call callback for controlled tooltip
    if (isDefined(show)) {
      const { onMouseLeave: callback } = this.props;

      callback();
    }
    else {
      // Hide tooltip
      this.setState({ show: false });
    }
  }

  render() {
    const { state: { position }, props: { title, children, ...rest } } = this;
    const show = this.shouldShowTooltip();

    return (
      <Wrapper
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseMove={this.handleMouseMove}
        ref={this.wrapper}
      >
        <Label {...rest} show={show} position={position} ref={this.label}>{title}</Label>
        {children}
      </Wrapper>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
