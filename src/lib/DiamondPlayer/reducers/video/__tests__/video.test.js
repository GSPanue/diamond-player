import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  MUTE_VIDEO,
  UNMUTE_VIDEO,
  MAXIMIZE_VIDEO,
  MINIMIZE_VIDEO
} from '../../../constants';

import reducer from '..';

describe('Reducer: Video', () => {
  it('should return the initial state', () => {
    const expectedState = {
      play: false,
      mute: false,
      maximize: false
    };

    const actualState = reducer(undefined, {});

    expect(expectedState).toEqual(actualState);
  });

  it('should handle PLAY_VIDEO', () => {
    const initialState = {
      play: false,
      mute: false,
      maximize: false
    };

    const expectedState = {
      play: true,
      mute: false,
      maximize: false
    };

    const actualState = reducer(initialState, { type: PLAY_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle PAUSE_VIDEO', () => {
    const initialState = {
      play: true,
      mute: false,
      maximize: false
    };

    const expectedState = {
      play: false,
      mute: false,
      maximize: false
    };

    const actualState = reducer(initialState, { type: PAUSE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MUTE_VIDEO', () => {
    const initialState = {
      play: false,
      mute: false,
      maximize: false
    };

    const expectedState = {
      play: false,
      mute: true,
      maximize: false
    };

    const actualState = reducer(initialState, { type: MUTE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle UNMUTE_VIDEO', () => {
    const initialState = {
      play: false,
      mute: true,
      maximize: false
    };

    const expectedState = {
      play: false,
      mute: false,
      maximize: false
    };

    const actualState = reducer(initialState, { type: UNMUTE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MAXIMIZE_VIDEO', () => {
    const initialState = {
      play: false,
      mute: false,
      maximize: false
    };

    const expectedState = {
      play: false,
      mute: false,
      maximize: true
    };

    const actualState = reducer(initialState, { type: MAXIMIZE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle MINIMIZE_VIDEO', () => {
    const initialState = {
      play: false,
      mute: false,
      maximize: true
    };

    const expectedState = {
      play: false,
      mute: false,
      maximize: false
    };

    const actualState = reducer(initialState, { type: MINIMIZE_VIDEO });

    expect(expectedState).toEqual(actualState);
  });
});
