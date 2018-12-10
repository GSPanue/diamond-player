import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '..';
import { Wrapper } from '../styles';

describe('Component: Button', () => {
  const minProps = {
    children: <div />,
    onClick: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Button {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Button {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Button {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for children and onClick', () => {
    const wrapper = mount(<Button {...minProps} />);

    expect(wrapper.props().children).toBeDefined();
    expect(wrapper.props().onClick).toBeDefined();
  });

  it('should call onClick on a click event', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button {...minProps} onClick={onClick} />);

    expect(onClick).toHaveBeenCalledTimes(0);
    wrapper.find(Wrapper).props().onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
