import React from 'react';
import { shallow } from 'enzyme';

import Slider from '..';
import { Wrapper, Input, Trail } from '../styles';

describe('Component: Slider', () => {
  const minProps = {
    onChange: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Slider {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Slider {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a Input component', () => {
    const wrapper = shallow(<Slider {...minProps} />);

    expect(wrapper.find(Input)).toHaveLength(1);
  });

  it('should render a Trail component', () => {
    const wrapper = shallow(<Slider {...minProps} />);

    expect(wrapper.find(Trail)).toHaveLength(1);
  });

  it('should have props for value and onChange', () => {
    const wrapper = shallow(<Slider {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.props.value).toBeDefined();
    expect(instance.props.step).toBeDefined();
    expect(instance.props.onChange).toBeDefined();
  });

  it('should call handleChange on a change event', () => {
    const spy = jest.spyOn(Slider.prototype, 'handleChange');
    const event = { target: { value: null } };
    const wrapper = shallow(<Slider {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Input).props().onChange(event);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldComponentUpdate', () => {
    it('should return false when value has not changed', () => {
      const wrapper = shallow(<Slider {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        value: '0'
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBeFalse();
    });

    it('should return true when value has changed', () => {
      const wrapper = shallow(<Slider {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        value: '1'
      };

      expect(instance.shouldComponentUpdate(nextProps)).toBeTrue();
    });
  });

  describe('Method: handleChange', () => {
    it('should call onChange', () => {
      const onChange = jest.fn();
      const event = { target: { value: null } };
      const wrapper = shallow(<Slider {...minProps} onChange={onChange} />);
      const instance = wrapper.instance();

      expect(onChange).toHaveBeenCalledTimes(0);
      instance.handleChange(event);
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should pass the target value as an argument to onChange', () => {
      const onChange = jest.fn();
      const event = { target: { value: 'value' } };
      const wrapper = shallow(<Slider {...minProps} onChange={onChange} />);
      const instance = wrapper.instance();

      instance.handleChange(event);
      expect(onChange).toBeCalledWith('value');
    });
  });
});
