/**
 * Return the result of factorial
 *
 * @param n
 *
 * @return {number}
 */

function factorial(n) {
  if (n < 0) { throw new Error('Please provide an natural number.'); }

  let result = 1;

  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }

  return result;
}

module.exports = { factorial };
