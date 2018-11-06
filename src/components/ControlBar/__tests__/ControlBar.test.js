import React from 'react';
import { shallow } from 'enzyme';

import ControlBar from '..';
import { Wrapper } from '../styles';

describe('Component: ControlBar', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a Play component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Play')).toHaveLength(1);
  });

  it('should render a Pause component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Pause')).toHaveLength(0);
    wrapper.setState({ showPlayButton: false });
    expect(wrapper.find('Pause')).toHaveLength(1);
  });
});
