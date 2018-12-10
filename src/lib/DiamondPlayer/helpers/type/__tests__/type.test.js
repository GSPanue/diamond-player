import { isFunction } from '..';

describe('Helper: Type', () => {
  describe('Function: isFunction', () => {
    it('should return true when passed a function', () => {
      expect(isFunction(() => {})).toBeTrue();
    });

    it('should return false when not passed a function', () => {
      expect(isFunction(undefined)).toBeFalse();
      expect(isFunction(false)).toBeFalse();
      expect(isFunction('')).toBeFalse();
      expect(isFunction({})).toBeFalse();
    });
  });
});
