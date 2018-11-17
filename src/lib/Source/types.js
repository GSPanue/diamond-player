import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  media: PropTypes.string,
  sizes: PropTypes.string,
  type: PropTypes.string
};

const defaultProps = {
  srcSet: undefined,
  media: undefined,
  sizes: undefined,
  type: undefined
};

export {
  propTypes,
  defaultProps
};
