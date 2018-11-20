import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  align: 'center',
  onClick: undefined
};

export {
  propTypes,
  defaultProps
};
