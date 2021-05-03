/**
 * Find PI to the Nth Digit.
 *
 * Enter a number and have the program generate PI up to that
 * many decimal places. Keep a limit to how far the program will go.
 *
 * @param {Number} amount - Amount of PI decimal places. MAX: 20
 */

export default function piToNthDigit(amount) {
	if (0 > amount < 20) {
		throw new Error('amount of digits is out of range');
	} else if (amount % 1 !== 0) {
		throw new Error('amount must be an integer');
	}

	let PI = Math.PI;

	return PI.toFixed(amount);
}
