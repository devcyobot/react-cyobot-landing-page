import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"brand-dark": "#110a25",
				"brand-dark-2": "#1F1441",
				"brand-purple-dark": "#22144A",
				"brand-purple": "#3e2486",
				"brand-green": "#1ad69c",
				"brand-yellow": "#f3c449",
				"brand-red": "#e00303",
				"brand-gray-light": "#f0f0f0",
				"brand-gray-dark": "#A2A2A2",
			},
			fontFamily: {
				vt323: ["var(--vt323-regular)", "monospace"],
				nunito: ["var(--nunito-regular)", "monospace"],
				robotoCondensed: ["var(--roboto-condensed)", "monospace"],
				roboto: ["var(--roboto-bold)", "monospace"],
			},
			keyframes: {
				slideDown: {
					"0%": { opacity: "0", transform: "translateY(-10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideUp: {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(-10px)" },
				},
				slideIn: {
					"0%": { transform: "translateX(-100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				slideOut: {
					"0%": { transform: "translateX(0)", opacity: "1" },
					"100%": { transform: "translateX(100%)", opacity: "0" },
				},
			},
			animation: {
				slideDown: "slideDown 0.3s ease-out forwards",
				slideUp: "slideUp 0.3s ease-out forwards",
				slideIn: "slideIn 0.5s ease-in-out forwards",
				slideOut: "slideOut 0.5s ease-in-out forwards",
			},
			screens: {
				"max-h-custom": { raw: "(max-height: 767px)" },
				"max-w-375px": { max: "375px" },
			},
		},
	},
	plugins: [],
};
export default config;
