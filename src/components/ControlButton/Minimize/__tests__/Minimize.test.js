import React from 'react';
import { shallow } from 'enzyme';

import Minimize from '..';
import { Icon } from '../styles';

describe('Component: Minimize', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Minimize />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Button component', () => {
    const wrapper = shallow(<Minimize />);

    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should render a Icon component', () => {
    const wrapper = shallow(<Minimize />);

    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Minimize.prototype, 'handleClick');
    const wrapper = shallow(<Minimize />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Button').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: handleClick', () => {
    /**
     * ToDo: Test handleClick.
     */
  });
});
