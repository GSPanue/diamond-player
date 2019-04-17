import { getHorizontalBoundaries } from '..';

describe('Helper: Boundary', () => {
  describe('Function: getHorizontalBoundaries', () => {
    it('should call getBoundingClientRect twice', () => {
      const getBoundingClientRect = jest.fn(() => ({
        width: 10
      }));

      const parent = { getBoundingClientRect };
      const wrapper = { getBoundingClientRect };

      expect(getBoundingClientRect).toHaveBeenCalledTimes(0);
      getHorizontalBoundaries(parent, wrapper);
      expect(getBoundingClientRect).toHaveBeenCalledTimes(2);
    });

    it('should return an object with properties left and right', () => {
      const getBoundingClientRect = jest.fn(() => ({
        width: 10
      }));

      const parent = { getBoundingClientRect };
      const wrapper = { getBoundingClientRect };

      expect(getHorizontalBoundaries(parent, wrapper)).toBeObject();
      expect(getHorizontalBoundaries(parent, wrapper)).toHaveProperty('left');
      expect(getHorizontalBoundaries(parent, wrapper)).toHaveProperty('right');
    });
  });
});
