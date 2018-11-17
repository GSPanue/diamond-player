import PropTypes from 'prop-types';

const propTypes = {
  autoPlay: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  poster: PropTypes.string,
  preload: PropTypes.oneOf([
    'auto',
    'metadata',
    'none'
  ]),
  src: PropTypes.string,
  style: PropTypes.object
};

const defaultProps = {
  autoPlay: false,
  children: undefined,
  controls: false,
  loop: false,
  muted: false,
  playsInline: false,
  poster: undefined,
  preload: undefined,
  src: undefined,
  style: undefined
};

export {
  propTypes,
  defaultProps
};
