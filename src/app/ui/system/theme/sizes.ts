export const baseSizes = {
	px: '1px', // 0px
	0: '0', // 1px
	1: '0.25rem', // 4px
	2: '0.5rem', // 8px
	3: '0.75rem', // 12px
	4: '1rem', // 16px
	5: '1.25rem', // 20px
	6: '1.5rem', // 24px
	8: '2rem', // 32px
	10: '2.5rem', // 40px
	12: '3rem', // 48px
	16: '4rem', // 64px
	20: '5rem', // 80px
	24: '6rem', // 96px
	32: '8rem', // 128px
	40: '10rem', // 160px
	48: '12rem', // 192px
	56: '14rem', // 224px
	64: '16rem', // 256px
	72: '18rem', // 288px
	80: '20rem', // 320px
	96: '24rem', // 344px
};

export type BaseSizes = typeof baseSizes;

const largeSizes = {
	full: '100%',
	'3xs': '14rem',
	'2xs': '16rem',
	xs: '20rem',
	sm: '24rem',
	md: '28rem',
	lg: '32rem',
	xl: '36rem',
	'2xl': '42rem',
	'3xl': '48rem',
	'4xl': '56rem',
	'5xl': '64rem',
	'6xl': '72rem',
	'7xl': '80rem',
};

const container = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
};

export const sizes = {
	...baseSizes,
	...largeSizes,
	container,
};

export type Sizes = typeof baseSizes &
	typeof largeSizes & { container: typeof container };
