import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  step: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
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
