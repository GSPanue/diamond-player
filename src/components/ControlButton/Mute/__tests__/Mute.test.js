import React from 'react';
import { shallow } from 'enzyme';

import { Mute } from '..';
import { MuteIcon, UnmuteIcon } from '../styles';

describe('Component: Mute', () => {
  const minProps = {
    context: {
      mute: false,
      actions: {
        toggleMute: () => {}
      }
    }
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Mute {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Button component', () => {
    const wrapper = shallow(<Mute {...minProps} />);

    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should render a MuteIcon component', () => {
    const wrapper = shallow(<Mute {...minProps} />);

    expect(wrapper.find(MuteIcon)).toHaveLength(1);
  });

  it('should render a UnmuteIcon component when mute is true', () => {
    const context = { mute: true, actions: { toggleMute: () => {} } };
    const wrapper = shallow(<Mute {...minProps} context={context} />);

    expect(wrapper.find(UnmuteIcon)).toHaveLength(1);
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Mute.prototype, 'handleClick');
    const wrapper = shallow(<Mute {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Button').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldComponentUpdate', () => {
    it('should return false when mute has not changed', () => {
      const wrapper = shallow(<Mute {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        context: {
          mute: false,
          actions: {
            toggleMute: () => {}
          }
        }
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(false);
    });

    it('should return true when mute has changed', () => {
      const wrapper = shallow(<Mute {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        context: {
          mute: true,
          actions: {
            toggleMute: () => {}
          }
        }
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(true);
    });
  });

  describe('Method: handleClick', () => {
    it('should call toggleMute', () => {
      const toggleMute = jest.fn();
      const context = { mute: false, actions: { toggleMute } };
      const wrapper = shallow(<Mute {...minProps} context={context} />);
      const instance = wrapper.instance();

      expect(toggleMute).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(toggleMute).toHaveBeenCalledTimes(1);
    });
  });
});
