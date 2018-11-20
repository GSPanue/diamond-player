import React from 'react';
import { shallow } from 'enzyme';

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
    const wrapper = shallow(<Button {...minProps} />);

    expect(wrapper.props().children).toBeDefined();
    expect(wrapper.props().onClick).toBeDefined();
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Button.prototype, 'handleClick');
    const wrapper = shallow(<Button {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Wrapper).props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: handleClick', () => {
    it('should call onClick', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<Button {...minProps} onClick={onClick} />);
      const instance = wrapper.instance();

      expect(onClick).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
