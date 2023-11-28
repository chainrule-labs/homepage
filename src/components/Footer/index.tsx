import React from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

function Footer() {
	return (
		<footer className="flex w-full flex-col items-center justify-center p-4">
			<div className="flex w-full max-w-screen-xl items-center justify-center">
				<a
					className="flex h-12 w-12 flex-shrink-0 items-center justify-center hover:text-primary-200"
					href={process.env.GITHUB_URL}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub size="28px" />
				</a>
				<a
					className="flex h-12 w-12 flex-shrink-0 items-center justify-center hover:text-primary-200"
					href={process.env.TWITTER_URL}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaXTwitter size="28px" />
				</a>
			</div>
			<div className="mt-4 flex flex-col py-2">
				<span className="text-center text-sm">
					© 2023 Chain Rule, LLC
				</span>
				<span className="text-center text-sm">All rights reserved</span>
			</div>
		</footer>
	);
}

export default Footer;
