import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'brand-dark': '#110a25',
				'brand-dark-2': '#1F1441',
				'brand-purple-dark': '#22144A',
				'brand-purple': '#3e2486',
				'brand-green': '#1ad69c',
				'brand-yellow': '#f3c449',
				'brand-red': '#e00303',
				'brand-gray-light': '#f0f0f0',
				'brand-gray-dark': '#A2A2A2',
			},
			fontFamily: {
				vt323: ['var(--vt323-regular)', 'monospace'],
				nunito: ['var(--nunito-regular)', 'monospace'],
				robotoCondensed: ['var(--roboto-condensed)', 'monospace'],
				roboto: ['var(--roboto-bold)', 'monospace'],
			},
		},
	},
	plugins: [],
};
export default config;
