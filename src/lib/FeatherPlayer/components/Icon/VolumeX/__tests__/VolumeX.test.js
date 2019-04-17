import React from 'react';
import { shallow, mount } from 'enzyme';

import VolumeX from '..';

describe('Component: VolumeX', () => {
  const minProps = {
    className: ''
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<VolumeX />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a svg tag', () => {
    const wrapper = shallow(<VolumeX />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should render a polygon tag', () => {
    const wrapper = shallow(<VolumeX />);

    expect(wrapper.find('polygon')).toHaveLength(1);
  });

  it('should render two line tags', () => {
    const wrapper = shallow(<VolumeX />);

    expect(wrapper.find('line')).toHaveLength(2);
  });

  it('should have props for color and size', () => {
    const wrapper = mount(<VolumeX {...minProps} />);

    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().size).toBeDefined();
    expect(wrapper.props().className).toBeDefined();
  });
});
