import PropTypes from 'prop-types';

const propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playVideo: PropTypes.func.isRequired,
  pauseVideo: PropTypes.func.isRequired
};

export {
  propTypes
};
