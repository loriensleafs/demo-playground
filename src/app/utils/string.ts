import { isNotEmptyString, isString } from './assertion';

export const replaceAll = (target: string, search: string, replacement: string = '') =>
	isNotEmptyString(target) &&
	isNotEmptyString(search) &&
	isString(replacement) &&
	target.replace(new RegExp(search, 'g'), replacement);

export const capitalize = (string: string, all: boolean = false) =>
	isString(string)
		? all
			? string
					.trim()
					.toLowerCase()
					.replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))
			: string.trim().replace(/^\w/, c => c.toUpperCase())
		: null;
