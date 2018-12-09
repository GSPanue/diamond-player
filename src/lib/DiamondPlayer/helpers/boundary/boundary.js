/**
 * getHorizontalBoundaries: Returns the horizontal boundaries for a dynamic child.
 */
const getHorizontalBoundaries = (parent, child) => {
  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();

  // Subtract half the width of the child from the width of the parent
  const x1 = parentRect.width - (childRect.width / 2);
  const x2 = parentRect.width;

  // Calculate the percentage change
  const percentageChange = ((x2 - x1) / x2) * 100;

  // Assign left and right boundaries in percentage
  const left = percentageChange;
  const right = 100 - percentageChange;

  return {
    left,
    right
  };
};

export {
  getHorizontalBoundaries
};
