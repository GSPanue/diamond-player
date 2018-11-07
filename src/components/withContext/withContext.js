import React from 'react';

import { Context } from '../Provider';

const withContext = (Component) => (
  (props) => (
    <Context.Consumer>
      {(context) => <Component {...props} context={{ ...context }} />}
    </Context.Consumer>
  )
);

export default withContext;
