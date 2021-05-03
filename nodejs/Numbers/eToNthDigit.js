/**
 * Find e to the Nth Digit.
 *
 * Enter a number and have the program generate e up to that
 * many decimal places. Keep a limit to how far the program will go.
 *
 * @param {Number} amount - Amount of PI decimal places. MAX: 20
 */

export default function eToNthDigit(amount) {
  if (0 > amount < 20) {
    throw new Error('amount of digits is out of range');
  } else if (amount % 1 !== 0) {
    throw new Error('amount must be an integer');
  }

  let e = Math.E;

  return e.toFixed(amount);
}
