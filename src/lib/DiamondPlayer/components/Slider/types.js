import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  value: '0'
};

export {
  propTypes,
  defaultProps
};
