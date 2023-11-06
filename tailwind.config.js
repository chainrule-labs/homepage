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
			sm: "505px",
			smd: "552px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			"sourceCodePro-regular": ["SourceCodePro-Regular"],
			"sourceCodePro-italic": ["SourceCodePro-Italic"],
			"sourceCodePro-bold": ["SourceCodePro-Bold"],
			"sourceCodePro-boldItalic": ["SourceCodePro-BoldItalic"],
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
