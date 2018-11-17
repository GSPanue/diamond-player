import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  MUTE_VIDEO,
  UNMUTE_VIDEO,
  MAXIMIZE_VIDEO,
  MINIMIZE_VIDEO
} from '../../constants';

const initialState = {
  play: false,
  mute: false,
  maximize: false
};

const video = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_VIDEO:
      return {
        ...state,
        play: true
      };

    case PAUSE_VIDEO:
      return {
        ...state,
        play: false
      };

    case MUTE_VIDEO:
      return {
        ...state,
        mute: true
      };

    case UNMUTE_VIDEO:
      return {
        ...state,
        mute: false
      };

    case MAXIMIZE_VIDEO:
      return {
        ...state,
        maximize: true
      };

    case MINIMIZE_VIDEO:
      return {
        ...state,
        maximize: false
      };

    default:
      return state;
  }
};

export default video;
