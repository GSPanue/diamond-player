import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  color: 'currentColor',
  size: '19',
  className: undefined
};

export {
  propTypes,
  defaultProps
};
