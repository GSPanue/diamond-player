import React from 'react';
import { shallow, mount } from 'enzyme';

import Tooltip from '..';
import { Wrapper } from '../styles';

describe('Component: Tooltip', () => {
  const minProps = {
    title: 'title',
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for title, align, and children', () => {
    const wrapper = mount(<Tooltip {...minProps} />);

    expect(wrapper.props().title).toBeDefined();
    expect(wrapper.props().align).toBeDefined();
    expect(wrapper.props().children).toBeDefined();
  });
});
