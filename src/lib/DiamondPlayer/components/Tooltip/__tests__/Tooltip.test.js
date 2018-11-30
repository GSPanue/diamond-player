import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from '..';
import { Wrapper, Label } from '../styles';

describe('Component: Tooltip', () => {
  const minProps = {
    title: 'title',
    children: <div />,
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

  it('should have props for title, align, separation, children, and innerRef', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.props.title).toBeDefined();
    expect(instance.props.align).toBeDefined();
    expect(instance.props.separation).toBeDefined();
    expect(instance.props.children).toBeDefined();
    expect(instance.props.innerRef).toBeDefined();
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

  describe('Method: handleMouseEnter', () => {
    it('should set show to true', () => {
      const wrapper = shallow(<Tooltip {...minProps} />);
      const instance = wrapper.instance();

      expect(wrapper.state().show).toEqual(false);
      instance.handleMouseEnter();
      expect(wrapper.state().show).toEqual(true);
    });
  });

  describe('Method: handleMouseLeave', () => {
    it('should set show to false', () => {
      const wrapper = shallow(<Tooltip {...minProps} />);
      const instance = wrapper.instance();

      wrapper.setState({ show: true });

      expect(wrapper.state().show).toEqual(true);
      instance.handleMouseLeave();
      expect(wrapper.state().show).toEqual(false);
    });
  });
});
