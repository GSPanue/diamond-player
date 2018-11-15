import React from 'react';
import { shallow } from 'enzyme';

import { Maximize } from '..';
import { MaximizeIcon, MinimizeIcon } from '../styles';

describe('Component: Maximize', () => {
  const minProps = {
    context: {
      maximize: false,
      actions: {
        toggleMaximize: () => {}
      }
    }
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

  it('should pass the title "Exit Fullscreen" to the TooltipButton component when maximize is true', () => {
    const context = { maximize: true, actions: { toggleMaximize: () => {} } };
    const wrapper = shallow(<Maximize {...minProps} context={context} />);

    expect(wrapper.find('TooltipButton').props().title).toEqual('Exit Fullscreen');
  });

  it('should render a MaximizeIcon component', () => {
    const wrapper = shallow(<Maximize {...minProps} />);

    expect(wrapper.find(MaximizeIcon)).toHaveLength(1);
  });

  it('should render a MinimizeIcon component when maximize is true', () => {
    const context = { maximize: true, actions: { toggleMaximize: () => {} } };
    const wrapper = shallow(<Maximize {...minProps} context={context} />);

    expect(wrapper.find(MinimizeIcon)).toHaveLength(1);
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Maximize.prototype, 'handleClick');
    const wrapper = shallow(<Maximize {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('TooltipButton').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldComponentUpdate', () => {
    it('should return false when maximize has not changed', () => {
      const wrapper = shallow(<Maximize {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        context: {
          maximize: false,
          actions: {
            toggleMaximize: () => {}
          }
        }
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(false);
    });

    it('should return true when maximize has changed', () => {
      const wrapper = shallow(<Maximize {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        context: {
          maximize: true,
          actions: {
            toggleMaximize: () => {}
          }
        }
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBe(true);
    });
  });

  describe('Method: handleClick', () => {
    it('should call toggleMaximize', () => {
      const toggleMaximize = jest.fn();
      const context = { maximize: false, actions: { toggleMaximize } };
      const wrapper = shallow(<Maximize {...minProps} context={context} />);
      const instance = wrapper.instance();

      expect(toggleMaximize).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(toggleMaximize).toHaveBeenCalledTimes(1);
    });
  });
});
