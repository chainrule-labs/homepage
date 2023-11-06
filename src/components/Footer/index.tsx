import React from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

function Footer() {
	return (
		<footer className="flex w-full items-center justify-center p-4">
			<a
				className="flex h-12 w-12 flex-shrink-0 items-center justify-center hover:text-light-100"
				href={process.env.GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub size="28px" />
			</a>
			<a
				className="flex h-12 w-12 flex-shrink-0 items-center justify-center hover:text-light-100"
				href={process.env.TWITTER_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaXTwitter size="28px" />
			</a>
		</footer>
	);
}

export default Footer;
