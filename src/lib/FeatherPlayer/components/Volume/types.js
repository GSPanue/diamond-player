import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.number.isRequired,
  isMuted: PropTypes.bool.isRequired,
  adjustVolume: PropTypes.func.isRequired
};

export {
  propTypes
};
