import React from 'react';
import { shallow, mount } from 'enzyme';

import Minimize from '..';

describe('Component: Minimize', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Minimize />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a svg tag', () => {
    const wrapper = shallow(<Minimize />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should render a path tag', () => {
    const wrapper = shallow(<Minimize />);

    expect(wrapper.find('path')).toHaveLength(1);
  });

  it('should have props for color and size', () => {
    const wrapper = mount(<Minimize />);

    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().size).toBeDefined();
  });
});
