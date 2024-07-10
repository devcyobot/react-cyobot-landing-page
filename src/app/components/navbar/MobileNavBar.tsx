"use client";
import Link from "next/link";
import styles from "./link.module.css";
import { useState } from "react";

export default function MobileNavBar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	// const handleOnclick = () => {
	// 	alert("In progress of developing. Please try download later.");
	// };

	function handleDrawerToggle() {
		setIsDrawerOpen(!isDrawerOpen);
	}

	return (
		<div className="md:hidden h-full flex flex-col ml-auto mr-5 justify-center">
			<button
				onClick={handleDrawerToggle}
				className="hover:bg-brand-purple bg-opacity-50 rounded"
			>
				<svg
					className="w-7 h-7"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={
							isDrawerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
						}
					></path>
				</svg>
			</button>
			<div
				className={
					isDrawerOpen
						? "z-10 lg:hidden absolute top-[4rem] right-0 bottom-0 left-0 flex flex-col justify-start items-center w-full h-screen bg-brand-dark-2 text-white ease-in duration-300"
						: "z-10 lg:hidden absolute top-[4rem] right-0 -left-full flex flex-col justify-start items-center w-full h-screen bg-brand-dark-2 text-white ease-in duration-300"
				}
			>
				<ul className="h-1/2 text-2xl flex flex-col items-center justify-evenly">
					<li className={styles.navLink} onClick={handleDrawerToggle}>
						<Link href="/">Home</Link>
					</li>
					<li className={styles.navLink} onClick={handleDrawerToggle}>
						<Link href="/about">About</Link>
					</li>
					<li>
						<div className="relative">
							<button
								onClick={toggleDropdown}
								className="text-white focus:outline-none"
							>
								Downloads
							</button>
							<div
								onMouseLeave={toggleDropdown}
								className={`text-end absolute mt-2 w-20 bg-brand-dark-2 rounded-md shadow-lg z-20 transition-all duration-300 ${
									isDropdownOpen
										? "animate-slideDown"
										: "animate-slideUp hidden"
								}`}
							>
								<button
									// onClick={handleOnclick}
									type="button"
									className="w-full px-4 py-2 text-white hover:text-brand-green"
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
									className="w-full px-4 py-2 text-white hover:text-brand-green"
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
					<li className={styles.navLink} onClick={handleDrawerToggle}>
						<Link href="/faq">FAQ</Link>
					</li>
				</ul>
				<button
					type="button"
					className="hover:shadow-[4px_4px_4px_#1AD69C] font-roboto text-2xl font-medium w-32 h-12 text-brand-purple bg-white shadow-md rounded-lg border-none justify-self-end"
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
		</div>
	);
}
