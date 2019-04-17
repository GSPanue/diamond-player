import PropTypes from 'prop-types';

const propTypes = {
  isMaximized: PropTypes.bool.isRequired,
  maximizeVideo: PropTypes.func.isRequired,
  minimizeVideo: PropTypes.func.isRequired
};

export {
  propTypes
};
