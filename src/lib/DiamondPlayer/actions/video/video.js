import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  MUTE_VIDEO,
  UNMUTE_VIDEO,
  MAXIMIZE_VIDEO,
  MINIMIZE_VIDEO,
  ADJUST_VOLUME
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

export {
  playVideo,
  pauseVideo,
  muteVideo,
  unmuteVideo,
  maximizeVideo,
  minimizeVideo,
  adjustVolume
};
