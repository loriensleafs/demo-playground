import set from 'clean-set';
import merge from 'lodash.merge';
import memoizeOne from 'memoize-one';
import { toArray } from './array';
import { isArray, isNil, isString } from './assertion';
import { Dict, Omit, StringOrNumber } from './types';

export { merge, set };

/**
 * Safely access deep object property values.
 *
 * @param obj - the target object.
 * @param path - the property path.
 * @param def - a default value to used if the path is null
 */
const _get = (obj: any, path: string | string[] | number | undefined, def?: any) => {
	const key = isString(path) ? path.split('.') : !isArray(path) ? [path] : path;

	for (let p = 0; p < key.length; p++) {
		obj = obj
			? typeof obj[key[p]] === 'function'
				? obj[key[p]]()
				: obj[key[p]]
			: undefined;
	}

	return obj === undefined ? def : obj;
};
export const get = (...args: any) =>
	args.length === 1
		? (obj: any, def: any) => _get(obj, args[0], def)
		: _get(args[0], args[1], args[2]);

export const memoizedGet = memoizeOne(_get);

const _omit = <T extends Dict, K extends keyof T>(object: T, keys: K[]) => {
	const result: Dict = {};

	for (const key in object) {
		if (keys.includes(key as any)) continue;
		result[key] = object[key];
	}

	return result as Omit<T, K>;
};
export const omit = (...args: any) =>
	args.length === 1
		? (object: object) => _omit(object, args[0])
		: _omit(args[0], args[1]);

const _pick = (
	object: object,
	keys: string | string[],
	valuesAsArray: boolean = false,
) => {
	let result: Dict | StringOrNumber[] = valuesAsArray ? [] : {};

	toArray(keys).forEach((key: string) => {
		const val = get(object, key);

		if (val) {
			if (valuesAsArray) {
				result.push(val);
			} else {
				result = set(result, key, val);
			}
		}
	});

	return result;
};
export const pick = (...args: any) =>
	args.length === 1
		? (object: object, valuesAsArray: boolean = false) =>
				_pick(object, args[0], valuesAsArray)
		: _pick(args[0], args[1], args[2]);

export const split = <T extends Dict, K extends keyof T>(object: T, keys: K[]) => {
	const picked: Dict = {};
	const omitted: Dict = {};

	for (const key in object) {
		if (keys.includes(key as T[K])) {
			picked[key] = object[key];
		} else {
			omitted[key] = object[key];
		}
	}

	return [picked, omitted] as [{ [P in K]: T[P] }, Omit<T, K>];
};

type FilterFn<T> = (value: any, key: string, object: T) => boolean;

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
export const objFilter = <T extends Dict>(object: T, fn: FilterFn<T>) => {
	const result: Dict = {};

	for (const key in object) {
		const value = object[key];
		const shouldPass = fn(value, key, object);

		if (shouldPass) {
			result[key] = value;
		}
	}

	return result;
};

export const filterUndef = (object: Dict) => objFilter(object, val => !isNil(val));

export const objKeys = <T extends Dict>(obj: T) =>
	(Object.keys(obj) as unknown) as (keyof T)[];

export const objVals = <T extends Dict>(obj: T) =>
	(Object.values(obj) as unknown) as (keyof T)[];

export const objEntries = <T extends Dict>(obj: T) =>
	(Object.entries(obj) as unknown) as (keyof T)[];
