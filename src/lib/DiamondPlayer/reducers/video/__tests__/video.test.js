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
} from '../../../constants';

import reducer from '..';

describe('Reducer: Video', () => {
  it('should return the initial state', () => {
    const expectedState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5',
      currentTime: '0:00',
      duration: '0:00'
    };

    const actualState = reducer(undefined, {});

    expect(expectedState).toEqual(actualState);
  });

  it('should handle PLAY_VIDEO', () => {
    const initialState = {
      playing: false
    };

    const expectedState = {
      playing: true
    };

    const actualState = reducer(initialState, { type: PLAY_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle PAUSE_VIDEO', () => {
    const initialState = {
      playing: true
    };

    const expectedState = {
      playing: false
    };

    const actualState = reducer(initialState, { type: PAUSE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MUTE_VIDEO', () => {
    const initialState = {
      muted: false
    };

    const expectedState = {
      muted: true
    };

    const actualState = reducer(initialState, { type: MUTE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle UNMUTE_VIDEO', () => {
    const initialState = {
      muted: true
    };

    const expectedState = {
      muted: false
    };

    const actualState = reducer(initialState, { type: UNMUTE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MAXIMIZE_VIDEO', () => {
    const initialState = {
      maximized: false
    };

    const expectedState = {
      maximized: true
    };

    const actualState = reducer(initialState, { type: MAXIMIZE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MINIMIZE_VIDEO', () => {
    const initialState = {
      maximized: true
    };

    const expectedState = {
      maximized: false
    };

    const actualState = reducer(initialState, { type: MINIMIZE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle ADJUST_VOLUME', () => {
    const initialState = {
      muted: false,
      volume: '0.5'
    };

    const expectedState = {
      muted: true,
      volume: '0'
    };

    const actualState = reducer(initialState, {
      type: ADJUST_VOLUME,
      payload: '0'
    });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle ADJUST_CURRENT_TIME', () => {
    const initialState = {
      currentTime: '0:00'
    };

    const expectedState = {
      currentTime: '1:00'
    };

    const actualState = reducer(initialState, {
      type: ADJUST_CURRENT_TIME,
      payload: '1:00'
    });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle ADJUST_DURATION', () => {
    const initialState = {
      duration: '0:00'
    };

    const expectedState = {
      duration: '1:00'
    };

    const actualState = reducer(initialState, {
      type: ADJUST_DURATION,
      payload: '1:00'
    });

    expect(expectedState).toEqual(actualState);
  });
});
