/**
 * getMousePosition: Returns the mouse position relative to the parent in percentage.
 */
const getMousePosition = (parent, boundary, pageX) => {
  const parentRect = parent.getBoundingClientRect();

  // Assign mouse position in percentage
  let position = (100 / parentRect.width) * (pageX - parentRect.left);

  const hasReachedLeftBoundary = (position <= boundary.left);
  const hasReachedRightBoundary = (position >= boundary.right);

  // Assign boundary if mouse position has reached a boundary
  if (hasReachedLeftBoundary || hasReachedRightBoundary) {
    position = (hasReachedLeftBoundary) ? boundary.left : boundary.right;
  }

  return position;
};

export {
  getMousePosition
};
