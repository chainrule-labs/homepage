import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

function CompactMenu() {
	return (
		<Menu as="div" className="relative">
			{({ open }) => (
				<>
					<Menu.Button className="flex h-9 w-9 items-center justify-center hover:text-primary-200 focus:outline-none">
						<FiMenu size="25px" />
					</Menu.Button>
					<Transition
						show={open}
						enter="transform transition duration-150 ease-in"
						enterFrom="opacity-0 scale-90"
						enterTo="opacity-100 scale-100"
						leave="trasnform transition duration-100 ease-out"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale 90"
					>
						<Menu.Items
							className="absolute right-0 top-4 flex origin-top-right flex-col rounded bg-dark-500 p-2 focus:outline-none"
							static
						>
							<Menu.Item>
								{({ active }) => (
									<Link
										className={`p-2 ${
											active && "text-primary-200"
										}`}
										href="/"
									>
										About
									</Link>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<Link
										className={`p-2 ${
											active && "text-primary-200"
										}`}
										href="/blog"
									>
										Blog
									</Link>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										className={`p-2 ${
											active && "text-primary-200"
										}`}
										href={process.env.CONTACT_EMAIL}
										rel="noopener noreferrer"
									>
										Contact
									</a>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
}

export default CompactMenu;
