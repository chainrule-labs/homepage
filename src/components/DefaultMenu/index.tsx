import Link from "next/link";
import React from "react";

function DefaultMenu() {
	return (
		<>
			<Link className="px-2 py-1 hover:text-primary-200" href="/">
				About
			</Link>
			<Link className="px-2 py-1 hover:text-primary-200" href="/blog">
				Blog
			</Link>
			<a
				className="px-2 py-1 hover:text-primary-200"
				href={process.env.CONTACT_EMAIL}
				rel="noopener noreferrer"
			>
				Contact
			</a>
		</>
	);
}

export default DefaultMenu;
