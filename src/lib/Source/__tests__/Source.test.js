import React from 'react';
import { shallow } from 'enzyme';

import { Source } from '..';

describe('Component: Source', () => {
  const minProps = {
    label: '',
    src: '',
    srcSet: '',
    media: '',
    sizes: '',
    type: ''
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Source {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a source tag', () => {
    const wrapper = shallow(<Source {...minProps} />);

    expect(wrapper.find('source')).toHaveLength(1);
  });

  it('should have props for label, src, srcSet, media, sizes, and type', () => {
    const wrapper = shallow(<Source {...minProps} />);

    expect(wrapper.props().label).toBeDefined();
    expect(wrapper.props().src).toBeDefined();
    expect(wrapper.props().srcSet).toBeDefined();
    expect(wrapper.props().media).toBeDefined();
    expect(wrapper.props().sizes).toBeDefined();
    expect(wrapper.props().type).toBeDefined();
  });
});
