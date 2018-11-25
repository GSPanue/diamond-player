import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  MUTE_VIDEO,
  UNMUTE_VIDEO,
  MAXIMIZE_VIDEO,
  MINIMIZE_VIDEO,
  ADJUST_VOLUME
} from '../../../constants';

import * as actions from '..';

describe('Actions: Video', () => {
  it('should create an action to play the video', () => {
    const expectedAction = {
      type: PLAY_VIDEO
    };

    const actualAction = actions.playVideo();

    expect(expectedAction).toEqual(actualAction);
  });

  it('should create an action to pause the video', () => {
    const expectedAction = {
      type: PAUSE_VIDEO
    };

    const actualAction = actions.pauseVideo();

    expect(expectedAction).toEqual(actualAction);
  });

  it('should create an action to mute the video', () => {
    const expectedAction = {
      type: MUTE_VIDEO
    };

    const actualAction = actions.muteVideo();

    expect(expectedAction).toEqual(actualAction);
  });

  it('should create an action to unmute the video', () => {
    const expectedAction = {
      type: UNMUTE_VIDEO
    };

    const actualAction = actions.unmuteVideo();

    expect(expectedAction).toEqual(actualAction);
  });

  it('should create an action to maximize the video', () => {
    const expectedAction = {
      type: MAXIMIZE_VIDEO
    };

    const actualAction = actions.maximizeVideo();

    expect(expectedAction).toEqual(actualAction);
  });

  it('should create an action to minimize the video', () => {
    const expectedAction = {
      type: MINIMIZE_VIDEO
    };

    const actualAction = actions.minimizeVideo();

    expect(expectedAction).toEqual(actualAction);
  });

  it('should create an action to adjust the volume', () => {
    const expectedAction = {
      type: ADJUST_VOLUME,
      payload: '0'
    };

    const actualAction = actions.adjustVolume('0');

    expect(expectedAction).toEqual(actualAction);
  });
});
