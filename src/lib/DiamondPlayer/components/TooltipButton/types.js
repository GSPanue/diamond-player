import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  spacing: PropTypes.oneOf([
    'normal',
    'large'
  ]),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired
};

const defaultProps = {
  align: 'center',
  spacing: 'normal'
};

export {
  propTypes,
  defaultProps
};
