"use client";

import Link from "next/link";
import React from "react";

import DefaultMenu from "../DefaultMenu";

function Header() {
	return (
		<header className="top-0 z-10 flex w-full items-center justify-center px-4 py-2">
			<div className="flex w-full max-w-4xl items-center justify-between py-2">
				<Link
					href="/"
					className="relative flex h-[65px] shrink-0 justify-center outline-none"
				>
					<img src="/images/iconChainRule.svg" alt="chainrule-icon" />
				</Link>
				<div className="shrink-0">
					<DefaultMenu />
				</div>
			</div>
		</header>
	);
}

export default Header;
