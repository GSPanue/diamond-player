import { Component } from 'react';

import { propTypes } from './types';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasNoError: true
    };
  }

  componentDidCatch() {
    this.setState({ hasNoError: false });
  }

  render() {
    const { state: { hasNoError }, props: { children } } = this;

    return (hasNoError) && children;
  }
}

ErrorBoundary.propTypes = propTypes;

export default ErrorBoundary;
