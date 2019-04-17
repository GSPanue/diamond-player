import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import { Wrapper } from '../styles';

describe('Component: App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a FeatherPlayer component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('FeatherPlayer')).toHaveLength(1);
  });
});
