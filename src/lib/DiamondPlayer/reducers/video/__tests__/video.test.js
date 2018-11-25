import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  MUTE_VIDEO,
  UNMUTE_VIDEO,
  MAXIMIZE_VIDEO,
  MINIMIZE_VIDEO,
  ADJUST_VOLUME
} from '../../../constants';

import reducer from '..';

describe('Reducer: Video', () => {
  it('should return the initial state', () => {
    const expectedState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const actualState = reducer(undefined, {});

    expect(expectedState).toEqual(actualState);
  });

  it('should handle PLAY_VIDEO', () => {
    const initialState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const expectedState = {
      playing: true,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const actualState = reducer(initialState, { type: PLAY_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle PAUSE_VIDEO', () => {
    const initialState = {
      playing: true,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const expectedState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const actualState = reducer(initialState, { type: PAUSE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MUTE_VIDEO', () => {
    const initialState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const expectedState = {
      playing: false,
      muted: true,
      maximized: false,
      volume: '0.5'
    };

    const actualState = reducer(initialState, { type: MUTE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle UNMUTE_VIDEO', () => {
    const initialState = {
      playing: false,
      muted: true,
      maximized: false,
      volume: '0.5'
    };

    const expectedState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const actualState = reducer(initialState, { type: UNMUTE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MAXIMIZE_VIDEO', () => {
    const initialState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const expectedState = {
      playing: false,
      muted: false,
      maximized: true,
      volume: '0.5'
    };

    const actualState = reducer(initialState, { type: MAXIMIZE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MINIMIZE_VIDEO', () => {
    const initialState = {
      playing: false,
      muted: false,
      maximized: true,
      volume: '0.5'
    };

    const expectedState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const actualState = reducer(initialState, { type: MINIMIZE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle ADJUST_VOLUME', () => {
    const initialState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0.5'
    };

    const expectedState = {
      playing: false,
      muted: false,
      maximized: false,
      volume: '0'
    };

    const actualState = reducer(initialState, {
      type: ADJUST_VOLUME,
      payload: '0'
    });

    expect(expectedState).toEqual(actualState);
  });
});
