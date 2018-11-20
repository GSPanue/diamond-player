import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: undefined
};

export {
  propTypes,
  defaultProps
};
