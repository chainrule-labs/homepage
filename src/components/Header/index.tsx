"use client";

import Link from "next/link";
import React from "react";

import CompactMenu from "../CompactMenu";
import DefaultMenu from "../DefaultMenu";

function Header() {
	return (
		<header className="top-0 z-10 flex w-full items-center justify-center px-4 py-2">
			<div className="flex w-full items-center justify-between py-2">
				<Link
					className="flex shrink-0 items-center justify-center"
					href="/"
				>
					<div className="relative flex w-[65px] justify-center outline-none">
						<img
							src="/images/iconChainRule.svg"
							alt="chainrule-icon"
						/>
					</div>
					<span className="ml-2 text-2xl">Chain Rule</span>
				</Link>
				<div className="hidden px-4 sm:flex">
					<DefaultMenu />
				</div>
				<div className="sm:hidden">
					<CompactMenu />
				</div>
			</div>
		</header>
	);
}

export default Header;
