const isUndefined = (value) => (
  typeof value === 'undefined'
);

const isDefined = (value) => (
  !(isUndefined(value))
);

const isFunction = (value) => (
  typeof value === 'function'
);

export {
  isUndefined,
  isDefined,
  isFunction
};
