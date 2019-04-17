import { getMousePosition } from '..';

describe('Helper: Mouse', () => {
  describe('Function: getMousePosition', () => {
    it('should call getBoundingClientRect once', () => {
      const getBoundingClientRect = jest.fn(() => ({
        left: 10,
        width: 10
      }));

      const parent = { getBoundingClientRect };
      const boundary = {
        left: 10,
        right: 10
      };
      const pageX = 10;

      expect(getBoundingClientRect).toHaveBeenCalledTimes(0);
      getMousePosition(parent, boundary, pageX);
      expect(getBoundingClientRect).toHaveBeenCalledTimes(1);
    });

    it('should return a number', () => {
      const getBoundingClientRect = jest.fn(() => ({
        left: 10,
        width: 10
      }));

      const parent = { getBoundingClientRect };
      const boundary = {
        left: 10,
        right: 10
      };
      const pageX = 10;

      expect(getMousePosition(parent, boundary, pageX)).toBeNumber();
    });

    it('should return left boundary when position is less than or equal to it', () => {
      const getBoundingClientRect = jest.fn(() => ({
        left: 50,
        width: 50
      }));

      const parent = { getBoundingClientRect };
      const boundary = {
        left: 100,
        right: 10
      };
      const pageX = 100;

      expect(getMousePosition(parent, boundary, pageX)).toEqual(boundary.left);
    });

    it('should return right boundary when position is greater than or equal to it', () => {
      const getBoundingClientRect = jest.fn(() => ({
        left: 50,
        width: 50
      }));

      const parent = { getBoundingClientRect };
      const boundary = {
        left: 10,
        right: 100
      };
      const pageX = 100;

      expect(getMousePosition(parent, boundary, pageX)).toEqual(boundary.right);
    });
  });
});
