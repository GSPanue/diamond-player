import React from 'react';
import { mount } from 'enzyme';

import Slider from '..';
import { Wrapper, InnerWrapper, Bar, Trail, Thumb } from '../styles';
import { getMousePosition, getHorizontalBoundaries } from '../../../helpers';

jest.mock('../../../helpers');

getMousePosition.mockImplementation(() => (50));

getHorizontalBoundaries.mockImplementation(() => ({
  left: 0,
  right: 100
}));

describe('Component: Slider', () => {
  const minProps = {
    innerWrapperHeight: '',
    barHeight: '',
    className: '',
    onChange: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = mount(<Slider {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = mount(<Slider {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a InnerWrapper component', () => {
    const wrapper = mount(<Slider {...minProps} />);

    expect(wrapper.find(InnerWrapper)).toHaveLength(1);
  });

  it('should render a Bar component', () => {
    const wrapper = mount(<Slider {...minProps} />);

    expect(wrapper.find(Bar)).toHaveLength(1);
  });

  it('should render a Trail component', () => {
    const wrapper = mount(<Slider {...minProps} />);

    expect(wrapper.find(Trail)).toHaveLength(1);
  });

  it('should render a Thumb component', () => {
    const wrapper = mount(<Slider {...minProps} />);

    expect(wrapper.find(Thumb)).toHaveLength(1);
  });

  it('should have props for value, showThumb, innerWrapperHeight', () => {
    const wrapper = mount(<Slider {...minProps} />);

    expect(wrapper.props().value).toBeDefined();
    expect(wrapper.props().showThumb).toBeDefined();
    expect(wrapper.props().innerWrapperHeight).toBeDefined();
  });

  it('should have props for barHeight, className, and onChange', () => {
    const wrapper = mount(<Slider {...minProps} />);

    expect(wrapper.props().barHeight).toBeDefined();
    expect(wrapper.props().className).toBeDefined();
    expect(wrapper.props().onChange).toBeDefined();
  });

  it('should call handleMouseDown on a mousedown event', () => {
    const spy = jest.spyOn(Slider.prototype, 'handleMouseDown');
    const event = { target: { pageX: null } };
    const wrapper = mount(<Slider {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Wrapper).props().onMouseDown(event);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call handleMouseUp on a mouseup event', () => {
    const spy = jest.spyOn(Slider.prototype, 'handleMouseUp');
    const wrapper = mount(<Slider {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Wrapper).props().onMouseUp();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: componentDidMount', () => {
    it('should call handleResize', () => {
      const spy = jest.spyOn(Slider.prototype, 'handleResize');

      expect(spy).toHaveBeenCalledTimes(0);
      mount(<Slider {...minProps} />);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call addEventListener once', () => {
      window.addEventListener = jest.fn();
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      window.addEventListener.mockClear();

      expect(window.addEventListener).toHaveBeenCalledTimes(0);
      instance.componentDidMount();
      expect(window.addEventListener).toHaveBeenCalledTimes(1);
    });

    it('should add a resize event listener', () => {
      window.addEventListener = jest.fn();
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      expect(window.addEventListener).toBeCalledWith('resize', instance.handleResize);
    });
  });

  describe('Method: componentWillUnmount', () => {
    it('should call removeEventListener once', () => {
      window.removeEventListener = jest.fn();
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      window.removeEventListener.mockClear();

      expect(window.removeEventListener).toHaveBeenCalledTimes(0);
      instance.componentWillUnmount();
      expect(window.removeEventListener).toHaveBeenCalledTimes(1);
    });

    it('should remove the resize event listener', () => {
      window.removeEventListener = jest.fn();
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      wrapper.unmount();

      expect(window.removeEventListener).toBeCalledWith('resize', instance.handleResize);
    });
  });

  describe('Method: handleResize', () => {
    it('should call getHorizontalBoundaries', () => {
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      getHorizontalBoundaries.mockClear();

      expect(getHorizontalBoundaries).toHaveBeenCalledTimes(0);
      instance.handleResize();
      expect(getHorizontalBoundaries).toHaveBeenCalledTimes(1);
    });

    it('should call setState', () => {
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      instance.setState = jest.fn();

      expect(instance.setState).toHaveBeenCalledTimes(0);
      instance.handleResize();
      expect(instance.setState).toHaveBeenCalledTimes(1);
    });

    it('should update the boundary property in state', () => {
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      getHorizontalBoundaries.mockImplementation(() => ({
        left: 10,
        right: 90
      }));

      const currentBoundary = wrapper.state().boundary;
      instance.handleResize();
      const nextBoundary = wrapper.state().boundary;

      expect(currentBoundary).not.toEqual(nextBoundary);
    });
  });

  describe('Method: handleMouseDown', () => {
    it('should call addEventListener twice', () => {
      window.addEventListener = jest.fn();
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      window.addEventListener.mockClear();

      expect(window.addEventListener).toHaveBeenCalledTimes(0);
      instance.handleMouseDown(event);
      expect(window.addEventListener).toHaveBeenCalledTimes(2);
    });

    it('should add a mousemove event listener', () => {
      window.addEventListener = jest.fn();
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      instance.handleMouseDown(event);
      expect(window.addEventListener).toHaveBeenCalledWith('mousemove', instance.handleMouseMove);
    });

    it('should add a mouseup event listener', () => {
      window.addEventListener = jest.fn();
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      instance.handleMouseDown(event);
      expect(window.addEventListener).toHaveBeenCalledWith('mouseup', instance.handleMouseUp);
    });

    it('should call handleChange', () => {
      const spy = jest.spyOn(Slider.prototype, 'handleChange');
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      expect(spy).toHaveBeenCalledTimes(0);
      instance.handleMouseDown(event);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call setState', () => {
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      instance.setState = jest.fn();

      expect(instance.setState).toHaveBeenCalledTimes(0);
      instance.handleMouseDown(event);
      expect(instance.setState).toHaveBeenCalledTimes(1);
    });

    it('should set mouseDown in state to true', () => {
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      expect(wrapper.state().mouseDown).toBeFalse();
      instance.handleMouseDown(event);
      expect(wrapper.state().mouseDown).toBeTrue();
    });
  });

  describe('Method: handleMouseUp', () => {
    it('should call removeEventListener twice', () => {
      window.removeEventListener = jest.fn();
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      window.removeEventListener.mockClear();

      expect(window.removeEventListener).toHaveBeenCalledTimes(0);
      instance.handleMouseUp();
      expect(window.removeEventListener).toHaveBeenCalledTimes(2);
    });

    it('should remove the mousemove event listener', () => {
      window.removeEventListener = jest.fn();
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      instance.handleMouseUp();
      expect(window.removeEventListener).toHaveBeenCalledWith('mousemove', instance.handleMouseMove);
    });

    it('should remove the mouseup event listener', () => {
      window.removeEventListener = jest.fn();
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      instance.handleMouseUp();
      expect(window.removeEventListener).toHaveBeenCalledWith('mouseup', instance.handleMouseUp);
    });

    it('should call setState', () => {
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      instance.setState = jest.fn();

      expect(instance.setState).toHaveBeenCalledTimes(0);
      instance.handleMouseUp();
      expect(instance.setState).toHaveBeenCalledTimes(1);
    });

    it('should set mouseDown in state to false', () => {
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      wrapper.setState({ mouseDown: true });

      expect(wrapper.state().mouseDown).toBeTrue();
      instance.handleMouseUp();
      expect(wrapper.state().mouseDown).toBeFalse();
    });
  });

  describe('Method: handleMouseMove', () => {
    it('should call handleChange if mouseDown is true', () => {
      const spy = jest.spyOn(Slider.prototype, 'handleChange');
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      wrapper.setState({ mouseDown: true });
      expect(wrapper.state().mouseDown).toBeTrue();

      spy.mockClear();

      expect(spy).toHaveBeenCalledTimes(0);
      instance.handleMouseMove(event);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should not call handleChange if mouseDown is false', () => {
      const spy = jest.spyOn(Slider.prototype, 'handleChange');
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      wrapper.setState({ mouseDown: false });
      expect(wrapper.state().mouseDown).toBeFalse();

      spy.mockClear();

      expect(spy).toHaveBeenCalledTimes(0);
      instance.handleMouseMove(event);
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });

  describe('Method: handleChange', () => {
    it('should call positionToValue', () => {
      const spy = jest.spyOn(Slider.prototype, 'positionToValue');
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      expect(spy).toHaveBeenCalledTimes(0);
      instance.handleChange(event);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call onChange if currentValue is not equal to nextValue', () => {
      const onChange = jest.fn();
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} value={0} onChange={onChange} />);
      const instance = wrapper.instance();

      instance.positionToValue = jest.fn(() => (0.50));

      const currentValue = instance.props.value;
      const nextValue = instance.positionToValue();

      expect(currentValue).toEqual(0);
      expect(nextValue).toEqual(0.50);

      expect(currentValue).not.toEqual(nextValue);

      expect(onChange).toHaveBeenCalledTimes(0);
      instance.handleChange(event);
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should not call callback if currentValue is equal to nextValue', () => {
      const onChange = jest.fn();
      const event = { target: { pageX: null } };
      const wrapper = mount(<Slider {...minProps} value={0.50} onChange={onChange} />);
      const instance = wrapper.instance();

      instance.positionToValue = jest.fn(() => (0.50));

      const currentValue = instance.props.value;
      const nextValue = instance.positionToValue();

      expect(currentValue).toEqual(0.50);
      expect(nextValue).toEqual(0.50);

      expect(currentValue).toEqual(nextValue);

      expect(onChange).toHaveBeenCalledTimes(0);
      instance.handleChange(event);
      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });

  describe('Method: positionToValue', () => {
    it('should call getMousePosition', () => {
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      getMousePosition.mockClear();

      expect(getMousePosition).toHaveBeenCalledTimes(0);
      instance.positionToValue(1);
      expect(getMousePosition).toHaveBeenCalledTimes(1);
    });

    it('should return a number', () => {
      const wrapper = mount(<Slider {...minProps} />);
      const instance = wrapper.instance();

      expect(instance.positionToValue(1)).toBeNumber();
    });
  });
});
