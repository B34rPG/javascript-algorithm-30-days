/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 *
 * @return {number[]}
 */

function fibonacci(n) {
  if (n <= 0) { throw new Error('Please provide a positive number.'); }

  let previousValue = 0;
  let currentValue = 1;

  const fibonacciSequence = [previousValue, currentValue];

  if (n === 1) { return fibonacciSequence; }

  let counter = n - 1;

  while (counter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibonacciSequence.push(currentValue);

    counter -= 1;
  }

  return fibonacciSequence;
}

module.exports = { fibonacci };
