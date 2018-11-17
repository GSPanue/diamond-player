import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  MUTE_VIDEO,
  UNMUTE_VIDEO,
  MAXIMIZE_VIDEO,
  MINIMIZE_VIDEO
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

export {
  playVideo,
  pauseVideo,
  muteVideo,
  unmuteVideo,
  maximizeVideo,
  minimizeVideo
};
