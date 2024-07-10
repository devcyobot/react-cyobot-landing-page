"use client";
import Link from "next/link";
import styles from "./link.module.css";
import { useState } from "react";

export default function DesktopNavBar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	// const handleOnclick = () => {
	// 	alert("You are downloading.");
	// };

	return (
		<div className="text-lg lg:text-xl xl:text-2xl font-roboto w-[75%] lg:w-[95%] md:flex hidden items-center justify-between mr-12">
			<ul className="flex justify-around">
				<li className={styles.navLink}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.navLink}>
					<Link href="/about">About</Link>
				</li>
				<li className={styles.navLink}>
					<div className="relative">
						<button
							onClick={toggleDropdown}
							className="text-white focus:outline-none"
						>
							Downloads
						</button>
						<div
							onMouseLeave={toggleDropdown}
							className={`text-center absolute mt-2 w-44 bg-brand-dark-2 rounded-md shadow-lg z-20 transition-all duration-300 ${
								isDropdownOpen ? "animate-slideDown" : "animate-slideUp hidden"
							}`}
						>
							<button
								// onClick={handleOnclick}
								type="button"
								className="block w-full px-4 py-2 text-white hover:text-brand-green"
							>
								<Link
									href={
										"https://drive.google.com/uc?%20export=download&id=1YfRPhSK-S0nsumdJqDb-pdz0eq0X9PQ1"
									}
								>
									Python
								</Link>
							</button>
							<button
								// onClick={handleOnclick}
								type="button"
								className="block w-full px-4 py-2 text-white hover:text-brand-green"
							>
								<Link
									href={
										"https://drive.google.com/uc?%20export=download&id=1iAsTuD3ixco-J1ERjiKxOyPH6YPlRRy2"
									}
								>
									Block
								</Link>
							</button>
						</div>
					</div>
				</li>
				<li className={styles.navLink}>
					<Link href="/faq">FAQ</Link>
				</li>
			</ul>
			{/* <div className="font-vt323">
				<button>EN</button>
				<span> / </span>
				<button>VN</button>
			</div> */}
			<button
				type="button"
				className="hover:shadow-[4px_4px_4px_#1AD69C] font-roboto text-lg lg:text-xl xl:text-2xl font-medium py-1 lg:py-2 px-3 lg:px-12 text-brand-purple bg-white shadow-md rounded-lg border-none justify-self-end"
			>
				<Link
					href="https://cyobot.myshopify.com/"
					passHref={true}
					target="_blank"
				>
					Shop
				</Link>
			</button>
		</div>
	);
}
