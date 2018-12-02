import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string,
  showThumb: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  value: '0',
  showThumb: true
};

export {
  propTypes,
  defaultProps
};
