import "../styles/globals.css";

import type { Metadata, Viewport } from "next";
import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const viewport: Viewport = {
	themeColor: "#000000", // dark-600
};

export const metadata: Metadata = {
	metadataBase: new URL("https://chainrule.io"),
	title: "Chain Rule",
	description:
		"We partner with founders to build and ship secure, robust DeFi products across multiple blockchains.",
	keywords: [
		"Open-Source",
		"Code",
		"Math",
		"Quant",
		"Quantitative",
		"Analysis",
		"Testing",
		"Chain Rule",
		"xSafe",
		"DeFi",
		"Crypto",
		"Protocol",
		"Distributed Systems",
		"Security",
		"Smart Contracts",
		"EVM",
		"Deploy",
		"Cross-Chain",
		"Multi-Chain",
		"Ethereum",
	],
	icons: {
		icon: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				url: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				url: "/favicon-16x16.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				url: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				url: "/android-chrome-192x192.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				url: "/android-chrome-512x512.png",
			},
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#4f585c", // dark-200
			},
		],
	},
	openGraph: {
		title: "Chain Rule",
		description:
			"We partner with founders to build and ship secure, robust DeFi products across multiple blockchains.",
		url: "https://chainrule.io",
		type: "website",
		images: [
			{
				url: "/card-image.png",
			},
		],
	},
	twitter: {
		title: "Chain Rule",
		description:
			"We partner with founders to build and ship secure, robust DeFi products across multiple blockchains.",
		card: "summary_large_image",
		images: [
			{
				url: "/card-image.png",
			},
		],
		site: "@chainrule_io",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex min-h-screen flex-col items-center bg-dark-600 text-light-100">
				<main className="flex w-full min-w-[300px] max-w-3xl flex-1 flex-col items-center">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
