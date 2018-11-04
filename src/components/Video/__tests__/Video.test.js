import React from 'react';
import { shallow } from 'enzyme';

import Video from '..';
import { Wrapper } from '../styles';

describe('Component: Video', () => {
  const minProps = {
    source: '',
    poster: '',
    preload: 'none'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Video {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Video {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render two source tags', () => {
    const source = [{ id: 'a', src: '', type: '' }, { id: 'b', src: '', type: '' }];
    const wrapper = shallow(<Video {...minProps} source={source} />);

    expect(wrapper.find('source')).toHaveLength(2);
  });

  it('it should have props for autoPlay, loop, muted, playsInline, poster, preload, and src', () => {
    const wrapper = shallow(<Video {...minProps} />);

    expect(wrapper.props().autoPlay).toBeDefined();
    expect(wrapper.props().loop).toBeDefined();
    expect(wrapper.props().muted).toBeDefined();
    expect(wrapper.props().playsInline).toBeDefined();
    expect(wrapper.props().poster).toBeDefined();
    expect(wrapper.props().preload).toBeDefined();
    expect(wrapper.props().src).toBeDefined();
  });
});
