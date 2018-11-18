import React from 'react';
import { shallow, mount } from 'enzyme';

import Volume2 from '..';

describe('Component: Volume2', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Volume2 />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a svg tag', () => {
    const wrapper = shallow(<Volume2 />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should render a polygon tag', () => {
    const wrapper = shallow(<Volume2 />);

    expect(wrapper.find('polygon')).toHaveLength(1);
  });

  it('should render a path tag', () => {
    const wrapper = shallow(<Volume2 />);

    expect(wrapper.find('path')).toHaveLength(1);
  });

  it('should have props for color and size', () => {
    const wrapper = mount(<Volume2 />);

    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().size).toBeDefined();
  });
});
