import { connect } from 'react-redux';

import { adjustVolume } from '../../actions';
import Volume from './Volume';

const mapStateToProps = (state) => ({
  value: state.video.volume,
  isMuted: state.video.muted
});

const mapDispatchToProps = (dispatch) => ({
  adjustVolume: (value) => dispatch(adjustVolume(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Volume);
