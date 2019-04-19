import React from 'react';
import { shallow, mount } from 'enzyme';

import Video from '..';
import { Wrapper } from '../styles';

describe('Component: Video', () => {
  const minProps = {
    poster: '',
    preload: 'none',
    src: ''
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Video {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Video {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should pass src as a prop to the video tag when children is not defined', () => {
    const wrapper = shallow(<Video {...minProps} />);

    expect(wrapper.props().src).toBeDefined();
  });

  it('should render children when children is defined', () => {
    const children = <div />;
    const wrapper = shallow(<Video {...minProps}>{children}</Video>);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should not pass src as a prop to the video tag when children is defined', () => {
    const children = <div />;
    const wrapper = shallow(<Video {...minProps}>{children}</Video>);

    expect(wrapper.props().src).toBeUndefined();
  });

  it('should have props for autoPlay, children, loop, muted, playsInline, poster, preload, and src', () => {
    const wrapper = mount(<Video {...minProps}><div /></Video>);

    expect(wrapper.props().autoPlay).toBeDefined();
    expect(wrapper.props().children).toBeDefined();
    expect(wrapper.props().loop).toBeDefined();
    expect(wrapper.props().muted).toBeDefined();
    expect(wrapper.props().playsInline).toBeDefined();
    expect(wrapper.props().poster).toBeDefined();
    expect(wrapper.props().preload).toBeDefined();
    expect(wrapper.props().src).toBeDefined();
  });
});
