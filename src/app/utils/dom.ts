import { get } from './object';

/**
 * Scrolls any focus visible input children of the 'ref' into view.
 *
 * @param ref - element used for event delegation, inputs must be a child of 'ref'.
 * @returns {function} - cleanup function to unsubscribe from dom events.
 */
export const scrollToFocusElements = (ref: HTMLElement = document.body) => {
	let focusIsVisible = false;

	const handleFocusVisible = ({ key }) => {
		if (key === 'Tab') {
			focusIsVisible = true;
			setTimeout(() => {
				focusIsVisible = false;
			}, 50);
		}
	};

	const handleFocus = ({ target }) => {
		if (target && target.scrollIntoView && !target.contains(ref) && focusIsVisible) {
			target.scrollIntoView({ block: 'center' });
		}
	};

	ref.addEventListener('focus', handleFocus, true);
	ref.addEventListener('keydown', handleFocusVisible);
	return () => {
		ref.removeEventListener('focus', handleFocus, true);
		ref.removeEventListener('keydown', handleFocusVisible);
	};
};

export const proxyAttr = (
	el: any,
	attr: string,
	options: { removeSrcAttr?: boolean; replaceSrcEl?: boolean } = {},
) => {
	const src = get(el, 'nativeElement', el);

	if (src) {
		const target = src.firstElementChild;

		if (get(src, attr)) {
			const srcVal = src[attr];
			const targetVal = target[attr];

			if (attr === 'className') {
				target.classList.add(src.className);
			} else {
				target[attr] = targetVal ? targetVal + ' ' + srcVal : srcVal;
			}
		}

		if (get(options, 'removeSrcAttr', false)) {
			src.removeAttribute(attr === 'className' ? 'class' : attr);
		}
		if (get(options, 'replaceSrcEl', false)) src.replaceWith(target);
	}
};
