import React from 'react';
import { shallow } from 'enzyme';

import DiamondPlayer from '../DiamondPlayer';
import { Wrapper, InnerWrapper } from '../styles';

describe('Component: DiamondPlayer', () => {
  const minProps = {
    source: '',
    style: {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Provider component', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.find('Provider')).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a InnerWrapper component', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.find(InnerWrapper)).toHaveLength(1);
  });

  it('should render a Video component', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.find('Video')).toHaveLength(1);
  });

  it('should render a ControlBar component', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.find('ControlBar')).toHaveLength(1);
  });

  it('should have props for style and source', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.find(Wrapper).props().style).toBeDefined();
    expect(wrapper.find('Video').props().source).toBeDefined();
  });
});
