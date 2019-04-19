import React from 'react';
import { shallow, mount } from 'enzyme';

import Play from '..';

describe('Component: Play', () => {
  const minProps = {
    className: ''
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Play />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a svg tag', () => {
    const wrapper = shallow(<Play />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should render a polygon tag', () => {
    const wrapper = shallow(<Play />);

    expect(wrapper.find('polygon')).toHaveLength(1);
  });

  it('should have props for color and size', () => {
    const wrapper = mount(<Play {...minProps} />);

    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().size).toBeDefined();
    expect(wrapper.props().className).toBeDefined();
  });
});
