import React from 'react';
import PropTypes from 'prop-types';

const Source = (props) => (
  <source {...props} />
);

Source.propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  media: PropTypes.string,
  sizes: PropTypes.string,
  type: PropTypes.string
};

Source.defaultProps = {
  srcSet: undefined,
  media: undefined,
  sizes: undefined,
  type: undefined
};

export default Source;
