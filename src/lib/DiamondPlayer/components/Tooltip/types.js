import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool,
  shouldMoveHorizontally: PropTypes.bool,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  separation: PropTypes.oneOf([
    'large'
  ]),
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

const defaultProps = {
  show: undefined,
  shouldMoveHorizontally: false,
  align: 'center',
  separation: undefined,
  className: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined
};

export {
  propTypes,
  defaultProps
};
