import { connect } from 'react-redux';

import { maximizeVideo, minimizeVideo } from '../../../actions';
import Maximize from './Maximize';

const mapStateToProps = (state) => ({
  isMaximized: state.video.maximized
});

const mapDispatchToProps = (dispatch) => ({
  maximizeVideo: () => dispatch(maximizeVideo()),
  minimizeVideo: () => dispatch(minimizeVideo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Maximize);
