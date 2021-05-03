/**
 * Fibonacci Sequence
 *
 * Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number.
 */

/**
 * fibonacciSequence takes a fibonacci number and return the full sequence to that number.
 *
 * @param {Number} number Number of fibonacci sequence to stop at.
 */
const fibonacciSequence = (number) => {};

/**
 * nthFibonacci takes an index of Fibonacci to end at and returns the subsequent sequence.
 *
 * @param {Number} index Index of Fibonacci sequence to stop at.
 */
const nthFibonacci = (index) => {
  if (index === 0) {
    return '0';
  }

  let sequence = [];
  let previousFibonacciNumber = 0;
  let currentFibonacciNumber = 1;

  for (let i = 0; i < index + 1; i++) {
    sequence.push(previousFibonacciNumber);
    let temp = previousFibonacciNumber;
    previousFibonacciNumber = currentFibonacciNumber;
    currentFibonacciNumber = temp + currentFibonacciNumber;
  }
  return sequence.map(String).join(', ');
};

console.log(nthFibonacci(5));
