import Link from "next/link";
import React from "react";

function DefaultMenu() {
	return (
		<>
			<Link href="/about" className="px-2 py-1 hover:text-light-100">
				About
			</Link>
			<Link href="/blog" className="px-2 py-1 hover:text-light-100">
				Blog
			</Link>
			<Link href="/work" className="px-2 py-1 hover:text-light-100">
				Work
			</Link>
			<Link href="/contact" className="px-2 py-1 hover:text-light-100">
				Contact
			</Link>
		</>
	);
}

export default DefaultMenu;
