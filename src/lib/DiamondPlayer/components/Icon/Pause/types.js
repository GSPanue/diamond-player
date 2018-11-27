import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

const defaultProps = {
  color: 'currentColor',
  size: '19'
};

export {
  propTypes,
  defaultProps
};
