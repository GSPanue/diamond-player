import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '..';

describe('Component: ProgressBar', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ProgressBar />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Slider component', () => {
    const wrapper = shallow(<ProgressBar />);

    expect(wrapper.find('Slider')).toHaveLength(1);
  });
});
