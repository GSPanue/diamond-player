import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '..';
import { Wrapper } from '../styles';

describe('Component: ProgressBar', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ProgressBar />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<ProgressBar />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a TooltipSlider component', () => {
    const wrapper = shallow(<ProgressBar />);

    expect(wrapper.find('TooltipSlider')).toHaveLength(1);
  });
});
