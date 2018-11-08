import React from 'react';
import { shallow } from 'enzyme';

import Settings from '..';
import { SettingsIcon } from '../styles';

describe('Component: Settings', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Settings />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a TooltipButton component', () => {
    const wrapper = shallow(<Settings />);

    expect(wrapper.find('TooltipButton')).toHaveLength(1);
  });

  it('should render a SettingsIcon component', () => {
    const wrapper = shallow(<Settings />);

    expect(wrapper.find(SettingsIcon)).toHaveLength(1);
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Settings.prototype, 'handleClick');
    const wrapper = shallow(<Settings />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('TooltipButton').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: handleClick', () => {
    /**
     * ToDo: Test handleClick.
     */
  });
});
