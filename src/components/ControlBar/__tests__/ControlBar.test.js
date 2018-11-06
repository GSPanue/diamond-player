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

  it('should render a Pause component when showPlayButton is false', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Pause')).toHaveLength(0);
    wrapper.setState({ showPlayButton: false });
    expect(wrapper.find('Pause')).toHaveLength(1);
  });

  it('should render a Settings component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Settings')).toHaveLength(1);
  });

  it('should render a Maximize component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Maximize')).toHaveLength(1);
  });

  it('should render a Minimize component when showMaximizeButton is false', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Minimize')).toHaveLength(0);
    wrapper.setState({ showMaximizeButton: false });
    expect(wrapper.find('Minimize')).toHaveLength(1);
  });
});
