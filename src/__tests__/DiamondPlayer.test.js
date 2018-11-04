import React from 'react';
import { shallow } from 'enzyme';

import DiamondPlayer from '../DiamondPlayer';
import { Wrapper } from '../styles';

describe('Component: DiamondPlayer', () => {
  const minProps = {
    source: '',
    style: {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a Video component', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.find('Video')).toHaveLength(1);
  });

  it('should have props for height, style, width, and source', () => {
    const wrapper = shallow(<DiamondPlayer {...minProps} />);

    expect(wrapper.props().maxHeight).toBeDefined();
    expect(wrapper.props().style).toBeDefined();
    expect(wrapper.props().maxWidth).toBeDefined();
    expect(wrapper.find(Wrapper).props().children.props.source).toBeDefined();
  });
});
