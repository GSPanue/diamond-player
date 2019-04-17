import React from 'react';
import { shallow, mount } from 'enzyme';

import Pause from '..';

describe('Component: Pause', () => {
  const minProps = {
    className: ''
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Pause />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a svg tag', () => {
    const wrapper = shallow(<Pause />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should render two rect tags', () => {
    const wrapper = shallow(<Pause />);

    expect(wrapper.find('rect')).toHaveLength(2);
  });

  it('should have props for color and size', () => {
    const wrapper = mount(<Pause {...minProps} />);

    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().size).toBeDefined();
    expect(wrapper.props().className).toBeDefined();
  });
});
