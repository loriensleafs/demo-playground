import memoize from 'memoize-one';
import { isEmptyArray, isFn, __DEV__ } from './assertion';
import { FunctionArguments } from './types';

export { memoize };

export const runIfFn = (valOrFn: any, ...args: any) =>
	isFn(valOrFn) ? (isEmptyArray(args) ? valOrFn() : valOrFn(...args)) : valOrFn;

export const callAllHandlers = <T extends (event: any) => void>(
	...fns: (T | undefined)[]
) => (event: FunctionArguments<T>[0]) =>
	fns.some(fn => {
		fn && fn(event);
		return event && event.defaultPrevented;
	});

export const once = (fn?: Function | null) => {
	let result: any;

	return function (this: any, ...args: any[]) {
		if (fn) {
			result = fn.apply(this, args);
			fn = null;
		}
		return result;
	};
};

type MessageOptions = {
	condition: boolean;
	message: string;
};

export const createWarning = once((options: MessageOptions) => {
	const { condition, message } = options;
	if (condition && __DEV__) console.warn(message);
});

export const createError = once((options: MessageOptions) => {
	const { condition, message } = options;
	if (condition && __DEV__) console.error(message);
});
