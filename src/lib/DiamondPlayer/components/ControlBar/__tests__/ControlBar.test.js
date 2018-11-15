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

    expect(wrapper.find('withContext(Play)')).toHaveLength(1);
  });

  it('should render a Mute component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('withContext(Mute)')).toHaveLength(1);
  });

  it('should render a Settings component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('Settings')).toHaveLength(1);
  });

  it('should render a Maximize component', () => {
    const wrapper = shallow(<ControlBar />);

    expect(wrapper.find('withContext(Maximize)')).toHaveLength(1);
  });
});
