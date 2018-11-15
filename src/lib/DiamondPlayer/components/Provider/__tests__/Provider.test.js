import React from 'react';
import { shallow } from 'enzyme';

import Provider from '../index';

describe('Component: Provider', () => {
  const minProps = {
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Provider {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a ContextProvider component', () => {
    const wrapper = shallow(<Provider {...minProps} />);

    expect(wrapper.find('ContextProvider')).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Provider {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have the correct initial state', () => {
    const wrapper = shallow(<Provider {...minProps} />);
    const instance = wrapper.instance();

    const expectedState = {
      play: false,
      mute: false,
      maximize: false,
      actions: {
        togglePlay: instance.togglePlay,
        toggleMute: instance.toggleMute,
        toggleMaximize: instance.toggleMaximize
      }
    };

    const actualState = wrapper.state();

    expect(expectedState).toEqual(actualState);
  });

  describe('Method: togglePlay', () => {
    it('should negate the value of play in state', () => {
      const wrapper = shallow(<Provider {...minProps} />);
      const instance = wrapper.instance();

      expect(wrapper.state().play).toEqual(false);
      instance.togglePlay();
      expect(wrapper.state().play).toEqual(true);
    });
  });

  describe('Method: toggleMute', () => {
    it('should negate the value of mute in state', () => {
      const wrapper = shallow(<Provider {...minProps} />);
      const instance = wrapper.instance();

      expect(wrapper.state().mute).toEqual(false);
      instance.toggleMute();
      expect(wrapper.state().mute).toEqual(true);
    });
  });

  describe('Method: toggleMaximize', () => {
    it('should negate the value of maximize in state', () => {
      const wrapper = shallow(<Provider {...minProps} />);
      const instance = wrapper.instance();

      expect(wrapper.state().maximize).toEqual(false);
      instance.toggleMaximize();
      expect(wrapper.state().maximize).toEqual(true);
    });
  });
});
