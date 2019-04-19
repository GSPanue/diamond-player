import React from 'react';
import { shallow } from 'enzyme';

import Maximize from '../Maximize';
import { MaximizeIcon, MinimizeIcon } from '../styles';

describe('Component: Maximize', () => {
  const minProps = {
    isMaximized: false,
    maximizeVideo: () => {},
    minimizeVideo: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Maximize {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a TooltipButton component', () => {
    const wrapper = shallow(<Maximize {...minProps} />);

    expect(wrapper.find('TooltipButton')).toHaveLength(1);
  });

  it('should pass the title "Enter Fullscreen" to the TooltipButton component', () => {
    const wrapper = shallow(<Maximize {...minProps} />);

    expect(wrapper.find('TooltipButton').props().title).toEqual('Enter Fullscreen');
  });

  it('should pass the title "Exit Fullscreen" to the TooltipButton component when isMaximized is true', () => {
    const wrapper = shallow(<Maximize {...minProps} isMaximized />);

    expect(wrapper.find('TooltipButton').props().title).toEqual('Exit Fullscreen');
  });

  it('should render a MaximizeIcon component', () => {
    const wrapper = shallow(<Maximize {...minProps} />);

    expect(wrapper.find(MaximizeIcon)).toHaveLength(1);
  });

  it('should render a MinimizeIcon component when isMaximized is true', () => {
    const wrapper = shallow(<Maximize {...minProps} isMaximized />);

    expect(wrapper.find(MinimizeIcon)).toHaveLength(1);
  });

  it('should have props for isMaximized, maximizeVideo, and minimizeVideo', () => {
    const wrapper = shallow(<Maximize {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.props.isMaximized).toBeDefined();
    expect(instance.props.maximizeVideo).toBeDefined();
    expect(instance.props.minimizeVideo).toBeDefined();
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Maximize.prototype, 'handleClick');
    const wrapper = shallow(<Maximize {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('TooltipButton').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldComponentUpdate', () => {
    it('should return false when isMaximized has not changed', () => {
      const wrapper = shallow(<Maximize {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        isMaximized: false
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBeFalse();
    });

    it('should return true when isMaximized has changed', () => {
      const wrapper = shallow(<Maximize {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        isMaximized: true
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBeTrue();
    });
  });

  describe('Method: handleClick', () => {
    it('should call maximizeVideo when isMaximized is false', () => {
      const maximizeVideo = jest.fn();
      const wrapper = shallow(<Maximize {...minProps} maximizeVideo={maximizeVideo} />);
      const instance = wrapper.instance();

      expect(maximizeVideo).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(maximizeVideo).toHaveBeenCalledTimes(1);
    });

    it('should call minimizeVideo when isMaximized is true', () => {
      const minimizeVideo = jest.fn();
      const wrapper = shallow(<Maximize {...minProps} isMaximized minimizeVideo={minimizeVideo} />);
      const instance = wrapper.instance();

      expect(minimizeVideo).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(minimizeVideo).toHaveBeenCalledTimes(1);
    });
  });
});
