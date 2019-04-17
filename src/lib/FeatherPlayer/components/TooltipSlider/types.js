import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  hasEntered: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export {
  propTypes
};
