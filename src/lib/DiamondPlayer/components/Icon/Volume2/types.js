import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ])
};

const defaultProps = {
  color: 'currentColor',
  size: '22'
};

export {
  propTypes,
  defaultProps
};
