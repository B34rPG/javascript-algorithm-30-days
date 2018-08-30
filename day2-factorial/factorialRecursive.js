/**
 * Return the result of factorial
 *
 * @param n
 *
 * @return {number}
 */

function factorialRecursive(n) {
  if (n > 1) {
    return n * factorialRecursive(n - 1);
  }
  return 1;
}

module.exports = { factorialRecursive };
