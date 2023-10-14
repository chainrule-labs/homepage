import "../styles/globals.css";

import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Chain Rule",
	description: "Chain Rule Homepage",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex min-h-screen flex-col bg-black text-white">
				<main className="flex w-full min-w-[300px] flex-1 flex-col items-center">
					{children}
				</main>
			</body>
		</html>
	);
}
