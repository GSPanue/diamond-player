import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  MUTE_VIDEO,
  UNMUTE_VIDEO,
  MAXIMIZE_VIDEO,
  MINIMIZE_VIDEO,
  ADJUST_VOLUME,
  ADJUST_CURRENT_TIME,
  ADJUST_DURATION
} from '../../constants';

const playVideo = () => ({
  type: PLAY_VIDEO
});

const pauseVideo = () => ({
  type: PAUSE_VIDEO
});

const muteVideo = () => ({
  type: MUTE_VIDEO
});

const unmuteVideo = () => ({
  type: UNMUTE_VIDEO
});

const maximizeVideo = () => ({
  type: MAXIMIZE_VIDEO
});

const minimizeVideo = () => ({
  type: MINIMIZE_VIDEO
});

const adjustVolume = (value) => ({
  type: ADJUST_VOLUME,
  payload: value
});

const adjustCurrentTime = (time) => ({
  type: ADJUST_CURRENT_TIME,
  payload: time
});

const adjustDuration = (duration) => ({
  type: ADJUST_DURATION,
  payload: duration
});

export {
  playVideo,
  pauseVideo,
  muteVideo,
  unmuteVideo,
  maximizeVideo,
  minimizeVideo,
  adjustVolume,
  adjustCurrentTime,
  adjustDuration
};
