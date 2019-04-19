import { connect } from 'react-redux';

import { playVideo, pauseVideo } from '../../../actions';
import Play from './Play';

const mapStateToProps = (state) => ({
  isPlaying: state.video.playing
});

const mapDispatchToProps = (dispatch) => ({
  playVideo: () => dispatch(playVideo()),
  pauseVideo: () => dispatch(pauseVideo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
