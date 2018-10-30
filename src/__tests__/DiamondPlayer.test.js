import React from 'react';
import { shallow } from 'enzyme';

import DiamondPlayer from '../DiamondPlayer';

describe('Component: DiamondPlayer', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<DiamondPlayer />);

    expect(wrapper).toHaveLength(1);
  });
});
