import React from 'react';

import { Context } from '../Provider';

const withContext = (Component) => {
  const WithContext = (props) => (
    <Context.Consumer>
      {(context) => <Component {...props} context={{ ...context }} />}
    </Context.Consumer>
  );

  WithContext.displayName = `withContext(${Component.displayName || Component.name})`;

  return WithContext;
};

export default withContext;
