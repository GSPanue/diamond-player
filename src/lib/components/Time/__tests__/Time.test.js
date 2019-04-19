import React from 'react';
import { shallow, mount } from 'enzyme';

import Time from '../Time';
import { Wrapper } from '../styles';

describe('Component: Time', () => {
  const minProps = {
    currentTime: '0:00',
    duration: '0:00'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Time {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Time {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render the current time and duration', () => {
    const wrapper = shallow(<Time {...minProps} />);
    const text = wrapper.text();

    expect(text).toEqual(`${minProps.currentTime} / ${minProps.duration}`);
  });

  it('should have props for currentTime and duration', () => {
    const wrapper = mount(<Time {...minProps} />);

    expect(wrapper.props().currentTime).toBeDefined();
    expect(wrapper.props().duration).toBeDefined();
  });
});
