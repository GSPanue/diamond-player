import React from 'react';
import { shallow } from 'enzyme';

import ControlBar from '..';
import { Wrapper, Section, Group } from '../styles';

describe('Component: ControlBar', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a two Section components', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find(Section)).toHaveLength(2);
  });

  it('should render a Group component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find(Group)).toHaveLength(1);
  });

  it('should render a Play component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Connect(Play)')).toHaveLength(1);
  });

  it('should render a Mute component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Connect(Mute)')).toHaveLength(1);
  });

  it('should render a Volume component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Connect(Volume)')).toHaveLength(1);
  });

  it('should render a Settings component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Settings')).toHaveLength(1);
  });

  it('should render a Maximize component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Connect(Maximize)')).toHaveLength(1);
  });
});
