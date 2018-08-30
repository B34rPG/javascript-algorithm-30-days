const { factorial } = require('../factorial');

describe('fibonacci', () => {
  it('should calculate factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(8)).toBe(40320);
    expect(factorial(10)).toBe(3628800);
    expect(factorial(15)).toBe(1307674368000);
  });
});
