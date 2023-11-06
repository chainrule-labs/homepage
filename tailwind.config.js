const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xxs: "300px",
			xs: "365px",
			sm: "440px",
			smd: "552px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			"averiaSerifLibre-regular": [
				"AveriaSerifLibre-Regular",
				"sans-serif",
			],
			"averiaSerifLibre-italic": [
				"AveriaSerifLibre-Italic",
				"sans-serif",
			],
			"averiaSerifLibre-bold": ["AveriaSerifLibre-Bold", "sans-serif"],
			"averiaSerifLibre-boldItalic": [
				"AveriaSerifLibre-BoldItalic",
				"sans-serif",
			],
		},
		extend: {
			colors: {
				"dark-600": "#000000",
				"dark-500": "#222124",
				"dark-400": "#2c2930",
				"dark-300": "#37333d",
				"dark-200": "#453e4f",
				"dark-100": "#51475e",
				"light-400": "#a68a92",
				"light-300": "#c7abb4",
				"light-200": "#dfccd2",
				"light-100": "#ffffff",
				"primary-200": "#fd6794df",
				"primary-100": "#fd6793",
				"bad-accent": "#ff004c",
				"good-accent": "#00ffe3",
			},
		},
	},
	plugins: [],
};
export default config;
