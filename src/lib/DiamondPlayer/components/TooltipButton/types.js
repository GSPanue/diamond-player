import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  separation: PropTypes.oneOf([
    'normal',
    'large'
  ]),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired
};

const defaultProps = {
  align: 'center',
  separation: 'normal'
};

export {
  propTypes,
  defaultProps
};
