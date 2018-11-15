import React from 'react';
import { shallow } from 'enzyme';

import { Source } from '..';

describe('Component: Source', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Source />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a source tag', () => {
    const wrapper = shallow(<Source />);

    expect(wrapper.find('source')).toHaveLength(1);
  });
});
