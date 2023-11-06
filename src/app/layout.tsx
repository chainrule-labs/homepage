import "../styles/globals.css";

import type { Metadata } from "next";
import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
	title: "Chain Rule",
	description:
		"We partner with founders to build and ship secure, robust DeFi products across multiple blockchains.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex min-h-screen flex-col items-center bg-dark-600 text-light-200">
				<main className="flex w-full min-w-[300px] max-w-3xl flex-1 flex-col items-center">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
