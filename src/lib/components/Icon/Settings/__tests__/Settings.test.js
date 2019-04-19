import React from 'react';
import { shallow, mount } from 'enzyme';

import Settings from '..';

describe('Component: Settings', () => {
  const minProps = {
    className: ''
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Settings />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a svg tag', () => {
    const wrapper = shallow(<Settings />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should render a circle tag', () => {
    const wrapper = shallow(<Settings />);

    expect(wrapper.find('circle')).toHaveLength(1);
  });

  it('should render a path tag', () => {
    const wrapper = shallow(<Settings />);

    expect(wrapper.find('path')).toHaveLength(1);
  });

  it('should have props for color and size', () => {
    const wrapper = mount(<Settings {...minProps} />);

    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().size).toBeDefined();
    expect(wrapper.props().className).toBeDefined();
  });
});
