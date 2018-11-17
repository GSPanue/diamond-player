import React from 'react';
import { shallow } from 'enzyme';

import Play from '../Play';
import { PlayIcon, PauseIcon } from '../styles';

describe('Component: Play', () => {
  const minProps = {
    isPlaying: false,
    playVideo: () => {},
    pauseVideo: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Play {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a TooltipButton component', () => {
    const wrapper = shallow(<Play {...minProps} />);

    expect(wrapper.find('TooltipButton')).toHaveLength(1);
  });

  it('should pass the title "Play" to the TooltipButton component', () => {
    const wrapper = shallow(<Play {...minProps} />);

    expect(wrapper.find('TooltipButton').props().title).toEqual('Play');
  });

  it('should pass the title "Pause" to the TooltipButton component when isPlaying is true', () => {
    const wrapper = shallow(<Play {...minProps} isPlaying />);

    expect(wrapper.find('TooltipButton').props().title).toEqual('Pause');
  });

  it('should render a PlayIcon component', () => {
    const wrapper = shallow(<Play {...minProps} />);

    expect(wrapper.find(PlayIcon)).toHaveLength(1);
  });

  it('should render a PauseIcon component when isPlaying is true', () => {
    const wrapper = shallow(<Play {...minProps} isPlaying />);

    expect(wrapper.find(PauseIcon)).toHaveLength(1);
  });

  it('should have props for isPlaying, playVideo, and pauseVideo', () => {
    const wrapper = shallow(<Play {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.props.isPlaying).toBeDefined();
    expect(instance.props.playVideo).toBeDefined();
    expect(instance.props.pauseVideo).toBeDefined();
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Play.prototype, 'handleClick');
    const wrapper = shallow(<Play {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('TooltipButton').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldComponentUpdate', () => {
    it('should return false when isPlaying has not changed', () => {
      const wrapper = shallow(<Play {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        isPlaying: false
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(false);
    });

    it('should return true when isPlaying has changed', () => {
      const wrapper = shallow(<Play {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        isPlaying: true
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(true);
    });
  });

  describe('Method: handleClick', () => {
    it('should call playVideo when isPlaying is false', () => {
      const playVideo = jest.fn();
      const wrapper = shallow(<Play {...minProps} playVideo={playVideo} />);
      const instance = wrapper.instance();

      expect(playVideo).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(playVideo).toHaveBeenCalledTimes(1);
    });

    it('should call pauseVideo when isPlaying is true', () => {
      const pauseVideo = jest.fn();
      const wrapper = shallow(<Play {...minProps} isPlaying pauseVideo={pauseVideo} />);
      const instance = wrapper.instance();

      expect(pauseVideo).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(pauseVideo).toHaveBeenCalledTimes(1);
    });
  });
});
