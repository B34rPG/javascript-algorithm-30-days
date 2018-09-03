/**
 * @param {string} x
 * @param {string} y
 *
 * @return {number}
 */

function hammingDistance(x, y) {
  if (x.length !== y.length) {
    throw new Error('Strings must be the same length.');
  }

  let diffCount = 0;
  for (let i = 0; i < x.length; i += 1) {
    if (x[i] !== y[i]) { diffCount += 1; }
  }

  return diffCount;
}

module.exports = { hammingDistance };
