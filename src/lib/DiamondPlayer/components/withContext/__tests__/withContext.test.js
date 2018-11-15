import React from 'react';
import { shallow } from 'enzyme';

import withContext from '..';

describe('Component: withContext', () => {
  const Component = () => <div />;
  const WrappedComponent = withContext(Component);

  it('should render without crashing', () => {
    const wrapper = shallow(<WrappedComponent />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a ContextConsumer component', () => {
    const wrapper = shallow(<WrappedComponent />);

    expect(wrapper.find('ContextConsumer')).toHaveLength(1);
  });
});
