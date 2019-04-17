import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from '..';
import { Wrapper, Label } from '../styles';

describe('Component: Tooltip', () => {
  const minProps = {
    title: 'title',
    separation: 'large',
    children: <div />,
    className: '',
    innerRef: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a Label component', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for title, show, align, separation, children, className, and innerRef', () => {
    const wrapper = shallow(<Tooltip {...minProps} show />);
    const instance = wrapper.instance();

    expect(instance.props.title).toBeDefined();
    expect(instance.props.show).toBeDefined();
    expect(instance.props.align).toBeDefined();
    expect(instance.props.separation).toBeDefined();
    expect(instance.props.children).toBeDefined();
    expect(instance.props.className).toBeDefined();
    expect(instance.props.innerRef).toBeDefined();
  });

  it('should not bind handleMouseEnter and handleMouseLeave when show is defined', () => {
    const wrapper = shallow(<Tooltip {...minProps} show />);
    const instance = wrapper.instance();

    expect(instance.handleMouseEnter).toBeUndefined();
    expect(instance.handleMouseLeave).toBeUndefined();
  });

  it('should not have state when show is defined', () => {
    const wrapper = shallow(<Tooltip {...minProps} show />);

    expect(wrapper.state()).toBeNull();
  });

  it('should bind handleMouseEnter and handleMouseLeave when show is not defined', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.handleMouseEnter).toBeFunction();
    expect(instance.handleMouseLeave).toBeFunction();
  });

  it('should have state when show is not defined', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    const expectedState = {
      show: false
    };

    const actualState = wrapper.state();

    expect(expectedState).toEqual(actualState);
  });

  it('should call shouldShowTooltip on render', () => {
    const spy = jest.spyOn(Tooltip.prototype, 'shouldShowTooltip');

    expect(spy).toHaveBeenCalledTimes(0);
    shallow(<Tooltip {...minProps} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call handleMouseEnter on a mouseenter event', () => {
    const spy = jest.spyOn(Tooltip.prototype, 'handleMouseEnter');
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Wrapper).props().onMouseEnter();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call handleMouseLeave on a mouseleave event', () => {
    const spy = jest.spyOn(Tooltip.prototype, 'handleMouseLeave');
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Wrapper).props().onMouseLeave();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldShowTooltip', () => {
    it('should return a boolean when show is not defined', () => {
      const wrapper = shallow(<Tooltip {...minProps} />);
      const instance = wrapper.instance();

      expect(instance.shouldShowTooltip()).toBeBoolean();
    });

    it('should return a boolean when show is defined', () => {
      const wrapper = shallow(<Tooltip {...minProps} show />);
      const instance = wrapper.instance();

      expect(instance.shouldShowTooltip()).toBeBoolean();
    });

    it('should return show state when show is not defined', () => {
      const wrapper = shallow(<Tooltip {...minProps} />);
      const instance = wrapper.instance();

      wrapper.setState({ show: true });

      expect(instance.props.show).toBeUndefined();
      expect(instance.shouldShowTooltip()).toBeTrue();
    });

    it('should return show prop when show is defined', () => {
      const wrapper = shallow(<Tooltip {...minProps} show />);
      const instance = wrapper.instance();

      expect(wrapper.state()).toBeNull();
      expect(instance.shouldShowTooltip()).toBeTrue();
    });
  });

  describe('Method: handleMouseEnter', () => {
    it('should set show to true', () => {
      const wrapper = shallow(<Tooltip {...minProps} />);
      const instance = wrapper.instance();

      expect(wrapper.state().show).toBeFalse();
      instance.handleMouseEnter();
      expect(wrapper.state().show).toBeTrue();
    });
  });

  describe('Method: handleMouseLeave', () => {
    it('should set show to false', () => {
      const wrapper = shallow(<Tooltip {...minProps} />);
      const instance = wrapper.instance();

      wrapper.setState({ show: true });

      expect(wrapper.state().show).toBeTrue();
      instance.handleMouseLeave();
      expect(wrapper.state().show).toBeFalse();
    });
  });
});
