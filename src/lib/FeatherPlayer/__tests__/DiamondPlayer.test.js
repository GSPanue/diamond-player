import React from 'react';
import { shallow, mount } from 'enzyme';

import FeatherPlayer from '../FeatherPlayer';
import { Wrapper, InnerWrapper } from '../styles';

describe('Component: FeatherPlayer', () => {
  const minProps = {
    children: <div />,
    poster: '',
    preload: 'none',
    src: '',
    style: {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<FeatherPlayer />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Provider component', () => {
    const wrapper = shallow(<FeatherPlayer />);

    expect(wrapper.find('Provider')).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<FeatherPlayer />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a Video component', () => {
    const wrapper = shallow(<FeatherPlayer />);

    expect(wrapper.find('Video')).toHaveLength(1);
  });

  it('should render a InnerWrapper component', () => {
    const wrapper = shallow(<FeatherPlayer />);

    expect(wrapper.find(InnerWrapper)).toHaveLength(1);
  });

  it('should render a ProgressBar component', () => {
    const wrapper = shallow(<FeatherPlayer />);

    expect(wrapper.find('ProgressBar')).toHaveLength(1);
  });

  it('should render a ControlBar component', () => {
    const wrapper = shallow(<FeatherPlayer />);

    expect(wrapper.find('ControlBar')).toHaveLength(1);
  });

  it('should have props for autoPlay, children, loop, muted, playsInline, poster, and preload', () => {
    const wrapper = mount(<FeatherPlayer {...minProps} />);

    expect(wrapper.props().autoPlay).toBeDefined();
    expect(wrapper.props().children).toBeDefined();
    expect(wrapper.props().loop).toBeDefined();
    expect(wrapper.props().muted).toBeDefined();
    expect(wrapper.props().playsInline).toBeDefined();
    expect(wrapper.props().poster).toBeDefined();
    expect(wrapper.props().preload).toBeDefined();
  });

  it('should have props for src and style', () => {
    const wrapper = mount(<FeatherPlayer {...minProps} />);

    expect(wrapper.props().src).toBeDefined();
    expect(wrapper.props().style).toBeDefined();
  });
});