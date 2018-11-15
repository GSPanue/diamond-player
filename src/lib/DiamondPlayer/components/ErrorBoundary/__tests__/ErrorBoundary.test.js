import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from '..';

describe('Component: ErrorBoundary', () => {
  const minProps = {
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<ErrorBoundary {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render children when hasNoError is true', () => {
    const wrapper = shallow(<ErrorBoundary {...minProps} />);

    expect(wrapper.state().hasNoError).toEqual(true);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render nothing when hasNoError is false', () => {
    const wrapper = shallow(<ErrorBoundary {...minProps} />);

    expect(wrapper.state().hasNoError).toEqual(true);

    wrapper.setState({ hasNoError: false });

    expect(wrapper.state().hasNoError).toEqual(false);
    expect(wrapper).toEqual({});
  });

  describe('Method: componentDidCatch', () => {
    it('should catch an error', () => {
      const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');

      const ErrorChild = () => {
        throw new Error();
      };

      mount(
        <ErrorBoundary>
          <ErrorChild />
        </ErrorBoundary>
      );

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should set hasNoError to false', () => {
      const wrapper = shallow(<ErrorBoundary {...minProps} />);
      const instance = wrapper.instance();

      expect(wrapper.state().hasNoError).toEqual(true);
      instance.componentDidCatch();
      expect(wrapper.state().hasNoError).toEqual(false);
    });
  });
});
