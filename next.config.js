/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === "production";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: !prod,
});

module.exports = withPWA({
	reactStrictMode: true,
	env: {
		// ********* PRIVATE ********* //
		// PRIVATE_EXAMPLE_VAR: process.env.PRIVATE_EXAMPLE_VAR,

		// ********* PUBLIC ********* //
		APP_URL: "https://chainrule.io",
		GITHUB_URL: "https://github.com/chainrule-labs",
		TWITTER_URL: "https://twitter.com/chainrule_io",
	},
});
