import React from 'react';
import { shallow } from 'enzyme';

import Volume from '../Volume';
import { Wrapper } from '../styles';

describe('Component: Volume', () => {
  const minProps = {
    value: '1',
    adjustVolume: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Volume {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Volume {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a Slider component', () => {
    const wrapper = shallow(<Volume {...minProps} />);

    expect(wrapper.find('Slider')).toHaveLength(1);
  });

  it('should have props for value and adjustVolume', () => {
    const wrapper = shallow(<Volume {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.props.value).toBeDefined();
    expect(instance.props.adjustVolume).toBeDefined();
  });

  it('should call handleChange on a change event', () => {
    const spy = jest.spyOn(Volume.prototype, 'handleChange');
    const wrapper = shallow(<Volume {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Slider').simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: shouldComponentUpdate', () => {
    it('should return false when value has not changed', () => {
      const wrapper = shallow(<Volume {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        value: '1'
      };

      expect(instance.shouldComponentUpdate(nextProps)).toEqual(false);
    });

    it('should return true when value has changed', () => {
      const wrapper = shallow(<Volume {...minProps} />);
      const instance = wrapper.instance();

      const nextProps = {
        value: '0'
      };

      expect(instance.shouldComponentUpdate(nextProps)).toEqual(true);
    });
  });

  describe('Method: handleChange', () => {
    it('should not call adjustVolume when shouldAdjustVolume is false', () => {
      const adjustVolume = jest.fn();
      const wrapper = shallow(<Volume {...minProps} adjustVolume={adjustVolume} />);
      const instance = wrapper.instance();

      expect(adjustVolume).toHaveBeenCalledTimes(0);
      instance.handleChange('1');
      expect(adjustVolume).toHaveBeenCalledTimes(0);
    });

    it('should call adjustVolume when shouldAdjustVolume is true', () => {
      const adjustVolume = jest.fn();
      const wrapper = shallow(<Volume {...minProps} adjustVolume={adjustVolume} />);
      const instance = wrapper.instance();

      expect(adjustVolume).toHaveBeenCalledTimes(0);
      instance.handleChange('0');
      expect(adjustVolume).toHaveBeenCalledTimes(1);
    });

    it('should pass the value as an argument to adjustVolume', () => {
      const adjustVolume = jest.fn();
      const wrapper = shallow(<Volume {...minProps} adjustVolume={adjustVolume} />);
      const instance = wrapper.instance();

      instance.handleChange('0');
      expect(adjustVolume).toBeCalledWith('0');
    });
  });
});