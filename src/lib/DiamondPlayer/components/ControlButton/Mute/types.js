import PropTypes from 'prop-types';

const propTypes = {
  isMuted: PropTypes.bool.isRequired,
  muteVideo: PropTypes.func.isRequired,
  unmuteVideo: PropTypes.func.isRequired
};

export {
  propTypes
};
