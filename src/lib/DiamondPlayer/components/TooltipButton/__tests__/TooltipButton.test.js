import React from 'react';
import { shallow, mount } from 'enzyme';

import TooltipButton from '..';

describe('Component: TooltipButton', () => {
  const minProps = {
    title: 'title',
    separation: 'large',
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

  it('should pass title, align, and separation to the Tooltip component', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper.find('Tooltip').props().title).toBeDefined();
    expect(wrapper.find('Tooltip').props().align).toBeDefined();
    expect(wrapper.find('Tooltip').props().separation).toBeDefined();
  });

  it('should pass onClick to the Button component', () => {
    const wrapper = shallow(<TooltipButton {...minProps} />);

    expect(wrapper.find('Button').props().onClick).toBeDefined();
  });

  it('should have props for title, align, children, and onClick', () => {
    const wrapper = mount(<TooltipButton {...minProps} />);

    expect(wrapper.props().title).toBeDefined();
    expect(wrapper.props().align).toBeDefined();
    expect(wrapper.props().separation).toBeDefined();
    expect(wrapper.props().children).toBeDefined();
    expect(wrapper.props().onClick).toBeDefined();
  });

  it('should call onClick on a click event', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<TooltipButton {...minProps} onClick={onClick} />);

    expect(onClick).toHaveBeenCalledTimes(0);
    wrapper.find('Button').props().onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
