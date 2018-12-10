import { isUndefined, isFunction } from '..';

describe('Helper: Type', () => {
  describe('Function: isUndefined', () => {
    it('should return true when passed undefined', () => {
      expect(isUndefined(undefined)).toBeTrue();
    });

    it('should return false when not passed undefined', () => {
      expect(isUndefined(null)).toBeFalse();
      expect(isUndefined(false)).toBeFalse();
      expect(isUndefined(0)).toBeFalse();
      expect(isUndefined('')).toBeFalse();
      expect(isUndefined({})).toBeFalse();
      expect(isUndefined(() => {})).toBeFalse();
    });
  });

  describe('Function: isFunction', () => {
    it('should return true when passed a function', () => {
      expect(isFunction(() => {})).toBeTrue();
    });

    it('should return false when not passed a function', () => {
      expect(isFunction(undefined)).toBeFalse();
      expect(isFunction(null)).toBeFalse();
      expect(isFunction(false)).toBeFalse();
      expect(isFunction(0)).toBeFalse();
      expect(isFunction('')).toBeFalse();
      expect(isFunction({})).toBeFalse();
    });
  });
});
