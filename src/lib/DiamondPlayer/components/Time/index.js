import { connect } from 'react-redux';

import Time from './Time';

const mapStateToProps = (state) => ({
  currentTime: state.video.currentTime,
  duration: state.video.duration
});

export default connect(mapStateToProps)(Time);
