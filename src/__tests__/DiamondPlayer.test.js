import React from 'react';
import { shallow } from 'enzyme';

import DiamondPlayer from '../DiamondPlayer';
import { Wrapper, Video } from '../styles';

describe('Component: DiamondPlayer', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<DiamondPlayer />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<DiamondPlayer />);

    expect(wrapper.find(<Wrapper />)).toHaveLength(1);
  });

  it('should render a Video component', () => {
    const wrapper = shallow(<DiamondPlayer />);

    expect(wrapper.find(<Video />)).toHaveLength(1);
  });
});
