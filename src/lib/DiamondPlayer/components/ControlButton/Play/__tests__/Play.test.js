import React from 'react';
import { shallow } from 'enzyme';

import { Play } from '..';
import { PlayIcon, PauseIcon } from '../styles';

describe('Component: Play', () => {
  const minProps = {
    context: {
      play: false,
      actions: {
        togglePlay: () => {}
      }
    }
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

  it('should pass the title "Pause" to the TooltipButton component when play is true', () => {
    const context = { play: true, actions: { togglePlay: () => {} } };
    const wrapper = shallow(<Play {...minProps} context={context} />);

    expect(wrapper.find('TooltipButton').props().title).toEqual('Pause');
  });

  it('should render a PlayIcon component', () => {
    const wrapper = shallow(<Play {...minProps} />);

    expect(wrapper.find(PlayIcon)).toHaveLength(1);
  });

  it('should render a PauseIcon component when play is true', () => {
    const context = { play: true, actions: { togglePlay: () => {} } };
    const wrapper = shallow(<Play {...minProps} context={context} />);

    expect(wrapper.find(PauseIcon)).toHaveLength(1);
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Play.prototype, 'handleClick');
    const wrapper = shallow(<Play {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('TooltipButton').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldComponentUpdate', () => {
    it('should return false when play has not changed', () => {
      const wrapper = shallow(<Play {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        context: {
          play: false,
          actions: {
            togglePlay: () => {}
          }
        }
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(false);
    });

    it('should return true when play has changed', () => {
      const wrapper = shallow(<Play {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        context: {
          play: true,
          actions: {
            togglePlay: () => {}
          }
        }
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(true);
    });
  });

  describe('Method: handleClick', () => {
    it('should call togglePlay', () => {
      const togglePlay = jest.fn();
      const context = { play: false, actions: { togglePlay } };
      const wrapper = shallow(<Play {...minProps} context={context} />);
      const instance = wrapper.instance();

      expect(togglePlay).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(togglePlay).toHaveBeenCalledTimes(1);
    });
  });
});
