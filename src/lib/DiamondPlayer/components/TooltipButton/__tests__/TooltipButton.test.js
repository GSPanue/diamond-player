import React from 'react';
import { shallow } from 'enzyme';

import TooltipButton from '..';

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

  it('should pass title and align to the Tooltip component', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper.find('Tooltip').props().title).toBeDefined();
    expect(wrapper.find('Tooltip').props().align).toBeDefined();
  });

  it('should pass onClick to the Button component', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper.find('Button').props().onClick).toBeDefined();
  });

  it('should have props for title, align, children, and onClick', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.props.title).toBeDefined();
    expect(instance.props.align).toBeDefined();
    expect(instance.props.children).toBeDefined();
    expect(instance.props.onClick).toBeDefined();
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(TooltipButton.prototype, 'handleClick');
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Button').props().onClick();
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
});
