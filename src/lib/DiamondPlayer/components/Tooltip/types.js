import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool,
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
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })
  ])
};

const defaultProps = {
  show: undefined,
  align: 'center',
  separation: 'normal',
  className: undefined,
  innerRef: undefined
};

export {
  propTypes,
  defaultProps
};
