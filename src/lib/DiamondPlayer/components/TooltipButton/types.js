import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
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
