import { isNotNum, isNull, isString } from './assertion';
import { replaceAll } from './string';

export const minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
export const maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;

/**
 * Convert value to number.
 *
 * @param value - the value to convert.
 */
export const toNumber = (value: any): number => {
	const val = isString(value) ? replaceAll(value, ',') : value;
	const num = parseFloat(val);
	return isNaN(value) || isNotNum(num) ? 0 : num;
};
export const toNum = (value: any): number => {
	const val = isString(value) ? replaceAll(value, ',') : value;
	const num = parseFloat(val);
	return isNaN(value) || isNotNum(num) ? 0 : num;
};

/**
 * Convert keycode to number keycode.
 *
 * @param keyCode - the keycode to convert.
 */
export const toNumberKey = (keyCode: number): string | null => {
	if (keyCode > 57) keyCode -= 48;
	if (keyCode >= 48 && keyCode <= 57) return String.fromCharCode(keyCode);
};

/**
 * Convert a value to a specific precision (or decimal points).
 *
 * @param value - the value to convert.
 * @param precision - the decimal points.
 */
export const toPrecision = (value: number | string, precision?: number): string => {
	let nextValue = toNumber(value);
	const scaleFactor = Math.pow(10, precision ? precision : 10);
	nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
	return precision ? nextValue.toFixed(precision) : nextValue.toString();
};

/**
 * Convert a value to percentage based on lower and upper bounds.
 *
 * @param value - the value in number.
 * @param min - the minimum value.
 * @param max - the maximum value.
 */
export const valueToPercent = (value: number, min: number, max: number): number =>
	((value - min) * 100) / (max - min);

/**
 * Calculate the value based on percentage, lower and upper bound values.
 *
 * @param percent - the percent value in decimals.
 * @param min - the minimum value.
 * @param max - the maximum value.
 */
export const percentToValue = (percent: number, min: number, max: number): number =>
	(max - min) * percent + min;

/**
 * Clamps a value to ensure it stays within the min and max range.
 *
 * @param value - the value to clamp.
 * @param min - the minimum value.
 * @param max - the maximum value.
 */
export const clampValue = (value: number, min: number, max: number): number =>
	isNull(value) ? value : Math.min(Math.max(value, min), max);

/**
 * Format a number to look like currency.
 *
 * @param value - the value to format.
 * @param options - any valid options for 'Intl.NumberFormat' method.
 * @returns {string|any} - the 'value' formatted as currency.
 */
export const formatMoney = (value: number | string): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'decimal',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	return formatter.format(toNumber(value) / 100);
};

/**
 * Return a currency value to the number it would have been before being passed to formatMoney().
 *
 * @param value - the value to format.
 * @returns {number} - the 'value' formatted as a number.
 */
export const unformatMoney = (value: number | string): number => toNumber(value) * 100;
