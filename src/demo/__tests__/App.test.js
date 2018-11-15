import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('Component: App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a DiamondPlayer component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('DiamondPlayer')).toHaveLength(1);
  });
});
