import React from 'react';
import { shallow, mount } from 'enzyme';

import ProgressBar from '..';
import { Wrapper, StyledTooltip } from '../styles';

describe('Component: ProgressBar', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<ProgressBar />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = mount(<ProgressBar />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a StyledTooltip component', () => {
    const wrapper = mount(<ProgressBar />);

    expect(wrapper.find(StyledTooltip)).toHaveLength(1);
  });

  it('should render a Slider component', () => {
    const wrapper = mount(<ProgressBar />);

    expect(wrapper.find('Slider')).toHaveLength(1);
  });

  it('should have the correct initial state', () => {
    const wrapper = shallow(<ProgressBar />, { disableLifecycleMethods: true });

    const expectedState = {
      boundary: {
        left: '0',
        right: '100'
      },
      position: '0'
    };

    const actualState = wrapper.state();

    expect(expectedState).toEqual(actualState);
  });

  it('should call handleMouseMove on a mousemove event', () => {
    const spy = jest.spyOn(ProgressBar.prototype, 'handleMouseMove');
    const wrapper = mount(<ProgressBar />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Wrapper).props().onMouseMove({ event: { pageX: 20 } });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call handleChange on a change event', () => {
    const spy = jest.spyOn(ProgressBar.prototype, 'handleChange');
    const wrapper = mount(<ProgressBar />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Slider').props().onChange();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: componentDidMount', () => {
    it('should call updateHorizontalBoundaries', () => {
      const spy = jest.spyOn(ProgressBar.prototype, 'updateHorizontalBoundaries');

      expect(spy).toHaveBeenCalledTimes(0);
      mount(<ProgressBar />);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call addEventListener', () => {
      window.addEventListener = jest.fn();

      expect(window.addEventListener).toHaveBeenCalledTimes(0);
      mount(<ProgressBar />);
      expect(window.addEventListener).toHaveBeenCalled();
    });

    it('should add a resize event listener', () => {
      window.addEventListener = jest.fn();
      const wrapper = mount(<ProgressBar />);
      const instance = wrapper.instance();

      expect(window.addEventListener).toBeCalledWith('resize', instance.updateHorizontalBoundaries);
    });
  });

  describe('Method: componentWillUnmount', () => {
    it('should call removeEventListener', () => {
      window.removeEventListener = jest.fn();
      mount(<ProgressBar />).unmount();
      expect(window.removeEventListener).toHaveBeenCalled();
    });

    it('should remove a resize event listener', () => {
      window.removeEventListener = jest.fn();
      const wrapper = mount(<ProgressBar />);
      const instance = wrapper.instance();

      instance.componentWillUnmount();
      expect(window.removeEventListener).toBeCalledWith('resize', instance.updateHorizontalBoundaries);
    });
  });

  describe('Method: getMousePosition', () => {
    it('should return a number', () => {
      const wrapper = mount(<ProgressBar />);
      const instance = wrapper.instance();

      expect(instance.getMousePosition(100)).toBeNumber();
    });
  });

  describe('Method: handleMouseMove', () => {
    it('should call getMousePosition', () => {
      const spy = jest.spyOn(ProgressBar.prototype, 'getMousePosition');
      const wrapper = mount(<ProgressBar />);
      const instance = wrapper.instance();

      expect(spy).toHaveBeenCalledTimes(0);
      instance.handleMouseMove(0);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call setState', () => {
      const wrapper = mount(<ProgressBar />);
      const instance = wrapper.instance();

      instance.setState = jest.fn();

      expect(instance.setState).toHaveBeenCalledTimes(0);
      instance.handleMouseMove(0);
      expect(instance.setState).toHaveBeenCalledTimes(1);
    });

    it('should update the position property in state', () => {
      const wrapper = mount(<ProgressBar />);
      const instance = wrapper.instance();

      const currentPosition = wrapper.state().position;
      instance.handleMouseMove(20);
      const nextPosition = wrapper.state().position;

      expect(currentPosition).not.toEqual(nextPosition);
    });
  });

  describe('Method: updateHorizontalBoundaries', () => {
    it('should call setState', () => {
      const wrapper = mount(<ProgressBar />);
      const instance = wrapper.instance();

      instance.setState = jest.fn();

      expect(instance.setState).toHaveBeenCalledTimes(0);
      instance.updateHorizontalBoundaries();
      expect(instance.setState).toHaveBeenCalledTimes(1);
    });

    it('should update the boundary object in state', () => {
      const wrapper = mount(<ProgressBar />);
      const instance = wrapper.instance();

      instance.wrapper = {
        current: {
          getBoundingClientRect: () => ({
            width: 10,
            left: 10
          })
        }
      };

      const currentBoundary = wrapper.state().boundary;
      instance.updateHorizontalBoundaries();
      const nextBoundary = wrapper.state().boundary;

      expect(currentBoundary).not.toEqual(nextBoundary);
    });
  });

  describe('Method: handleChange', () => {
    /**
     * ToDo: Complete tests
     */
    it('should call adjustCurrentTime', () => {

    });
  });
});
