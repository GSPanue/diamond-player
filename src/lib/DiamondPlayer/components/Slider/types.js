import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.number,
  showThumb: PropTypes.bool,
  innerWrapperHeight: PropTypes.string,
  barHeight: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  value: 0,
  showThumb: true,
  innerWrapperHeight: undefined,
  barHeight: undefined,
  className: undefined
};

export {
  propTypes,
  defaultProps
};
