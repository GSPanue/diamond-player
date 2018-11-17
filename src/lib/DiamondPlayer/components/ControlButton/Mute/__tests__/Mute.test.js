import React from 'react';
import { shallow } from 'enzyme';

import Mute from '../Mute';
import { MuteIcon, UnmuteIcon } from '../styles';

describe('Component: Mute', () => {
  const minProps = {
    isMuted: false,
    muteVideo: () => {},
    unmuteVideo: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Mute {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a TooltipButton component', () => {
    const wrapper = shallow(<Mute {...minProps} />);

    expect(wrapper.find('TooltipButton')).toHaveLength(1);
  });

  it('should pass the title "Mute" to the TooltipButton component', () => {
    const wrapper = shallow(<Mute {...minProps} />);

    expect(wrapper.find('TooltipButton').props().title).toEqual('Mute');
  });

  it('should pass the title "Unmute" to the TooltipButton component when isMuted is true', () => {
    const wrapper = shallow(<Mute {...minProps} isMuted />);

    expect(wrapper.find('TooltipButton').props().title).toEqual('Unmute');
  });

  it('should render a MuteIcon component', () => {
    const wrapper = shallow(<Mute {...minProps} />);

    expect(wrapper.find(MuteIcon)).toHaveLength(1);
  });

  it('should render a UnmuteIcon component when isMuted is true', () => {
    const wrapper = shallow(<Mute {...minProps} isMuted />);

    expect(wrapper.find(UnmuteIcon)).toHaveLength(1);
  });

  it('should have props for isMuted, muteVideo, and unmuteVideo', () => {
    const wrapper = shallow(<Mute {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.props.isMuted).toBeDefined();
    expect(instance.props.muteVideo).toBeDefined();
    expect(instance.props.unmuteVideo).toBeDefined();
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Mute.prototype, 'handleClick');
    const wrapper = shallow(<Mute {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('TooltipButton').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldComponentUpdate', () => {
    it('should return false when isMuted has not changed', () => {
      const wrapper = shallow(<Mute {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        isMuted: false
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(false);
    });

    it('should return true when isMuted has changed', () => {
      const wrapper = shallow(<Mute {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        isMuted: true
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(true);
    });
  });

  describe('Method: handleClick', () => {
    it('should call muteVideo when isMuted is false', () => {
      const muteVideo = jest.fn();
      const wrapper = shallow(<Mute {...minProps} muteVideo={muteVideo} />);
      const instance = wrapper.instance();

      expect(muteVideo).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(muteVideo).toHaveBeenCalledTimes(1);
    });
  });

  it('should call unmuteVideo when isMuted is true', () => {
    const unmuteVideo = jest.fn();
    const wrapper = shallow(<Mute {...minProps} isMuted unmuteVideo={unmuteVideo} />);
    const instance = wrapper.instance();

    expect(unmuteVideo).toHaveBeenCalledTimes(0);
    instance.handleClick();
    expect(unmuteVideo).toHaveBeenCalledTimes(1);
  });
});
