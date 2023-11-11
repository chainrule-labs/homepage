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
				"dark-500": "#18191a",
				"dark-400": "#262c2e",
				"dark-300": "#3a4245",
				"dark-200": "#4f585c",
				"dark-100": "#677175",
				"light-400": "#a0a9ad",
				"light-300": "#b8bfc2",
				"light-200": "#e1e2e3",
				"light-100": "#ffffff",
				"primary-200": "#51c0fc",
				"primary-100": "#5cc6ff",
				"bad-accent": "#cf0202",
				"good-accent": "#4bd402",
			},
		},
	},
	plugins: [],
};
export default config;
