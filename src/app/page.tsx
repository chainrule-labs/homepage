import React from "react";

export default function Home() {
	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start py-10">
			<div className="flex min-h-fit w-full flex-col px-4">
				<h2 className="mb-2 font-sourceCodePro-bold text-xl">
					What We Do
				</h2>
				<span>
					We partner with founders to build and ship secure, robust
					DeFi products across multiple blockchains.
				</span>
				<h2 className="mb-2 mt-8 font-sourceCodePro-bold text-xl">
					Our Services
				</h2>
				<ul className="mb-2 list-outside list-disc pl-4">
					<li className="pl-2">
						DeFi protocol design and quantitative analysis
					</li>
					<li className="pl-2">
						Robust, gas-optimized smart contract systems
					</li>
					<li className="pl-2">
						Rigorous testing with exhaustive coverage
					</li>
					<li className="pl-2">
						Performant, clean-architecture-based backend services
						and distributed systems
					</li>
					<li className="pl-2">
						Secure, scalable, high-availability, cloud architecture
						design
					</li>
					<li className="pl-2">
						Thoughtful, intuitive user interfaces
					</li>
				</ul>
				<h2 className="mb-2 mt-8 font-sourceCodePro-bold text-xl">
					About Us
				</h2>
				<span>
					Our engineering team has extensive experience building and
					shipping robust, scalable DeFi products, including a
					cross-chain stablecoin, a cross-chain message relaying
					system, and a DeFi shorting protocol.
				</span>
				<span className="mt-4">
					Chain Rule actively contributes to and builds open-source
					projects that accelerate the pace of innovation, regardless
					of economic incentives. Recently, we built{" "}
					<a
						className="text-primary-200 underline underline-offset-4 hover:text-primary-100"
						href={process.env.XSAFE_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						xSafe
					</a>
					, a tool to simplify multi-chain smart contract deployments
					to the same address.
				</span>
				<h2 className="mb-2 mt-8 font-sourceCodePro-bold text-xl">
					Contact
				</h2>
				<span>
					<a
						className="text-primary-200 underline underline-offset-4 hover:text-primary-100"
						href={process.env.CONTACT_EMAIL}
					>
						Get in touch with us
					</a>{" "}
					to see how Chain Rule can help your project.
				</span>
			</div>
		</div>
	);
}
