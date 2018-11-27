import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string,
  step: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  value: '0',
  step: '0.01'
};

export {
  propTypes,
  defaultProps
};
