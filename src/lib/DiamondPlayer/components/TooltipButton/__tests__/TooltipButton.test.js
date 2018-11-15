import React from 'react';
import { shallow } from 'enzyme';

import TooltipButton from '../index';

describe('Component: TooltipButton', () => {
  const minProps = {
    title: 'title',
    children: <div />,
    onClick: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Tooltip component', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper.find('Tooltip')).toHaveLength(1);
  });

  it('should render a Button component', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have the correct initial state', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    const expectedState = {
      show: false
    };

    const actualState = wrapper.state();

    expect(expectedState).toEqual(actualState);
  });

  it('should pass title and show to the Tooltip component', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper.find('Tooltip').props().title).toBeDefined();
    expect(wrapper.find('Tooltip').props().show).toBeDefined();
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(TooltipButton.prototype, 'handleClick');
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Button').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call handleMouseEnter on a mouseenter event', () => {
    const spy = jest.spyOn(TooltipButton.prototype, 'handleMouseEnter');
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Button').props().onMouseEnter();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call handleMouseLeave on a mouseleave event', () => {
    const spy = jest.spyOn(TooltipButton.prototype, 'handleMouseLeave');
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Button').props().onMouseLeave();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: handleClick', () => {
    it('should call onClick', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<TooltipButton {...minProps} onClick={onClick} />);
      const instance = wrapper.instance();

      expect(onClick).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Method: handleMouseEnter', () => {
    it('should set show to true', () => {
      const wrapper = shallow(<TooltipButton {...minProps} />);
      const instance = wrapper.instance();

      expect(wrapper.state().show).toEqual(false);
      instance.handleMouseEnter();
      expect(wrapper.state().show).toEqual(true);
    });
  });

  describe('Method: handleMouseLeave', () => {
    it('should set show to false', () => {
      const wrapper = shallow(<TooltipButton {...minProps} />);
      const instance = wrapper.instance();

      wrapper.setState({ show: true });

      expect(wrapper.state().show).toEqual(true);
      instance.handleMouseLeave();
      expect(wrapper.state().show).toEqual(false);
    });
  });
});
