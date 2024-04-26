import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'brand-dark': '#110a25',
				'brand-purple-dark': '#22144A',
				'brand-purple': '#3e2486',
				'brand-green': '#1ad69c',
				'brand-yellow': '#f3c449',
				'brand-red': '#e00303',
				'brand-gray-light': '#f0f0f0',
				'brand-gray-dark': '#A2A2A2',
			},
			fontSize: {
				'font-28px': '1.75rem',
				'font-80px': '5rem',
			},
		},
	},
	plugins: [],
};
export default config;
