import { connect } from 'react-redux';

import { muteVideo, unmuteVideo } from '../../../actions';
import Mute from './Mute';

const mapStateToProps = (state) => ({
  isMuted: state.video.muted
});

const mapDispatchToProps = (dispatch) => ({
  muteVideo: () => dispatch(muteVideo()),
  unmuteVideo: () => dispatch(unmuteVideo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Mute);
