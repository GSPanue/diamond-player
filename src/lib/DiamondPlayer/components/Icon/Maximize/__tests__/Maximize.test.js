import React from 'react';
import { shallow, mount } from 'enzyme';

import Maximize from '..';

describe('Component: Maximize', () => {
  const minProps = {
    className: ''
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Maximize />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a svg tag', () => {
    const wrapper = shallow(<Maximize />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should render a path tag', () => {
    const wrapper = shallow(<Maximize />);

    expect(wrapper.find('path')).toHaveLength(1);
  });

  it('should have props for color and size', () => {
    const wrapper = mount(<Maximize {...minProps} />);

    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().size).toBeDefined();
    expect(wrapper.props().className).toBeDefined();
  });
});
