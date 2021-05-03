import piToNthDigit from '../piToNthDigit';

describe('The PI to the Nth Digit function', () => {
	test('does not accept a non-number', () => {
		expect(piToNthDigit('non-number')).toThrowError('Error');
	});
});
