import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

export {
  propTypes
};
