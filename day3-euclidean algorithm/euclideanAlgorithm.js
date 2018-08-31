/**
 * @param {number} originalX
 * @param {number} originalY
 * @return {number}
 */

function euclideanAlgorithm(originalX, originalY) {
  const x = Math.abs(originalX);
  const y = Math.abs(originalY);

  return y === 0 ? x : euclideanAlgorithm(y, x % y);
}

module.exports = { euclideanAlgorithm };
