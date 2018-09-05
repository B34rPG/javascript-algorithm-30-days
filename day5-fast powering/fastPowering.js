/**
 * @param {number} base - Number that will be raised to the power.
 * @param {number} power - The power that number will be raised to.
 * @return {number}
 *
 * @return {number}
 */

function fastPowering(base, power) {
  if (power === 0) { return 1; }
  if (power % 2 === 0) {
    const result = fastPowering(base, power / 2);
    return result * result;
  }
  const result = fastPowering(base, Math.floor(power / 2));
  return result * result * base;
}

module.exports = { fastPowering };
