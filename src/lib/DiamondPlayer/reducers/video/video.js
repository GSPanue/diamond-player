import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  MUTE_VIDEO,
  UNMUTE_VIDEO,
  MAXIMIZE_VIDEO,
  MINIMIZE_VIDEO,
  ADJUST_VOLUME
} from '../../constants';

const initialState = {
  playing: false,
  muted: false,
  maximized: false,
  volume: '0.5'
};

const video = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_VIDEO:
      return {
        ...state,
        playing: true
      };

    case PAUSE_VIDEO:
      return {
        ...state,
        playing: false
      };

    case MUTE_VIDEO:
      return {
        ...state,
        muted: true
      };

    case UNMUTE_VIDEO:
      return {
        ...state,
        muted: false
      };

    case MAXIMIZE_VIDEO:
      return {
        ...state,
        maximized: true
      };

    case MINIMIZE_VIDEO:
      return {
        ...state,
        maximized: false
      };

    case ADJUST_VOLUME:
      return {
        ...state,
        volume: action.payload
      };

    default:
      return state;
  }
};

export default video;
