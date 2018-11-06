import React from 'react';
import { shallow } from 'enzyme';

import Pause from '..';
import { Icon } from '../styles';

describe('Component: Pause', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Pause />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Button component', () => {
    const wrapper = shallow(<Pause />);

    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should render a Icon component', () => {
    const wrapper = shallow(<Pause />);

    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Pause.prototype, 'handleClick');
    const wrapper = shallow(<Pause />);

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
