import { Dict } from './types';

//
// ────────────────────────────────────────────────────────────────── BOOLEAN ─────
//

export const isBool = (value: any) => value === true || value === false;

//
// ─────────────────────────────────────────────────────────────────── NUMBER ─────
//

export const isNum = (value: any): value is number => typeof value === 'number';

export const isNotNum = (value: any) => !isNum(value);

//
// ─────────────────────────────────────────────────────────────────── ARRAY ──────
//

export const isArray = <T>(value: any): value is Array<T> => Array.isArray(value);

export const isEmptyArray = (value: any) => isArray(value) && value.length === 0;

export const isNotEmptyArray = (value: any) => isArray(value) && value.length > 0;

//
// ───────────────────────────────────────────────────────────────────── DATE ─────
//

export const isDate = (value: any) => value instanceof Date && !isNaN(value.valueOf());

//
// ───────────────────────────────────────────────────────────────── FUNCTION ─────
//

export const isFunc = (value: any): value is Function => typeof value === 'function';
export const isFn = (value: any): value is Function => typeof value === 'function';

//
// ─────────────────────────────────────────────────────────────────── OBJECT ─────
//

export const isObj = (value: any): value is Dict => {
	const type = typeof value;
	return value != null && (type === 'object' || type === 'function') && !isArray(value);
};

export const isEmptyObj = (value: any) => isObj(value) && Object.keys(value).length === 0;

export const isNotEmptyObj = (value: any): value is object => !isEmptyObj(value);

//
// ──────────────────────────────────────────────────────────── NULL/UNDEFINED ─────
//

export const isUndef = (value: any): value is undefined =>
	typeof value === 'undefined' || value === undefined;

export const isDef = (value: any) => typeof value !== 'undefined' && value !== undefined;

export const isNull = (value: any): value is null => value == null;

export const isNil = (value: any) => isNull(value) || !isDef(value);

//
// ─────────────────────────────────────────────────────────────────── STRING ─────
//

export const isString = (value: any): value is string =>
	!isNil(value) && Object.prototype.toString.call(value) === '[object String]';

export const isEmptyString = (value: any) => isString(value) && value === '';

export const isNotEmptyString = (value: any) => isString(value) && !isEmptyString(value);

//
// ──────────────────────────────────────────────────────────────────── EMPTY ─────
//

export const isEmpty = (value: any) =>
	isEmptyArray(value) || isEmptyObj(value) || isEmptyString(value) || isNull(value);

//
// ────────────────────────────────────────────────────────────── ENVIRONMENT ─────
//

export const __DEV__ = process.env.NODE_ENV !== 'production';
