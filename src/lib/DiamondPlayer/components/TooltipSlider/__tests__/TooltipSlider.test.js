import React from 'react';
import { shallow, mount } from 'enzyme';

import TooltipSlider from '..';
import { StyledSlider } from '../styles';

describe('Component: TooltipSlider', () => {
  const minProps = {
    title: '',
    value: 0,
    hasEntered: false,
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onChange: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<TooltipSlider {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Tooltip component', () => {
    const wrapper = shallow(<TooltipSlider {...minProps} />);

    expect(wrapper.find('Tooltip')).toHaveLength(1);
  });

  it('should render a StyledSlider component', () => {
    const wrapper = shallow(<TooltipSlider {...minProps} />);

    expect(wrapper.find(StyledSlider)).toHaveLength(1);
  });

  it('should have props for title, value, hasEntered, onMouseEnter, onMouseLeave, and onChange', () => {
    const wrapper = mount(<TooltipSlider {...minProps} />);

    expect(wrapper.props().title).toBeDefined();
    expect(wrapper.props().value).toBeDefined();
    expect(wrapper.props().hasEntered).toBeDefined();
    expect(wrapper.props().onMouseEnter).toBeDefined();
    expect(wrapper.props().onMouseLeave).toBeDefined();
    expect(wrapper.props().onChange).toBeDefined();
  });

  it('should pass title, show, shouldMoveHorizontally, onMouseEnter, and onMouseLeave to Tooltip', () => {
    const wrapper = shallow(<TooltipSlider {...minProps} />);

    expect(wrapper.find('Tooltip').props().title).toBeDefined();
    expect(wrapper.find('Tooltip').props().show).toBeDefined();
    expect(wrapper.find('Tooltip').props().shouldMoveHorizontally).toBeDefined();
    expect(wrapper.find('Tooltip').props().onMouseEnter).toBeDefined();
    expect(wrapper.find('Tooltip').props().onMouseLeave).toBeDefined();
  });

  it('should pass value, showThumb, and onChange to StyledSlider', () => {
    const wrapper = shallow(<TooltipSlider {...minProps} />);

    expect(wrapper.find(StyledSlider).props().value).toBeDefined();
    expect(wrapper.find(StyledSlider).props().showThumb).toBeDefined();
    expect(wrapper.find(StyledSlider).props().onChange).toBeDefined();
  });

  it('should call onMouseEnter on a mouseEnter event', () => {
    const onMouseEnter = jest.fn();
    const wrapper = shallow(<TooltipSlider {...minProps} onMouseEnter={onMouseEnter} />);

    expect(onMouseEnter).toHaveBeenCalledTimes(0);
    wrapper.find('Tooltip').props().onMouseEnter();
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it('should call onMouseLeave on a mouseleave event', () => {
    const onMouseLeave = jest.fn();
    const wrapper = shallow(<TooltipSlider {...minProps} onMouseLeave={onMouseLeave} />);

    expect(onMouseLeave).toHaveBeenCalledTimes(0);
    wrapper.find('Tooltip').props().onMouseLeave();
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });

  it('should call onChange on a change event', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<TooltipSlider {...minProps} onChange={onChange} />);

    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper.find(StyledSlider).props().onChange();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
