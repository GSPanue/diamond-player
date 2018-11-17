import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

const defaultProps = {
  onClick: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined
};

export {
  propTypes,
  defaultProps
};
