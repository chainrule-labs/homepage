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
			smsm: "490px",
			smd: "690px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {},
	},
	plugins: [],
};
export default config;
