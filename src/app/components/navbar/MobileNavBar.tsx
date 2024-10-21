"use client";
import { Button } from "@/app/components/ui/Button";
import PopupDownloads from "@/app/components/ui/popup/PopupDownloads";
import Link from "next/link";
import { useState } from "react";
import styles from "./link.module.css";

export default function MobileNavBar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [showPopup, setShowPopup] = useState<Boolean>(false);
	const [downloadOption, setDownloadOption] = useState<{
		description: string;
		link: string;
	}>({ description: "", link: "" });

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleClickDownloadOption = (option: string, link: string) => {
		setDownloadOption({ description: option, link: link });
		setShowPopup(true);
	};

	function handleDrawerToggle() {
		setIsDrawerOpen(!isDrawerOpen);
	}

	return (
		<>
			<div className="md:hidden h-full flex flex-col ml-auto mr-5 justify-center">
				<button onClick={handleDrawerToggle} className="bg-opacity-50 rounded">
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
								isDrawerOpen
									? "M6 18L18 6M6 6l12 12"
									: "M4 6h16M4 12h16M4 18h16"
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
						<li className={styles["nav-link"]} onClick={handleDrawerToggle}>
							<Link href="/">Home</Link>
						</li>
						<li className={styles["nav-link"]} onClick={handleDrawerToggle}>
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
									className={`text-end absolute mt-2 w-28 bg-brand-dark rounded-md shadow-lg z-20 transition-all duration-300 ${
										isDropdownOpen
											? "animate-slideDown"
											: "animate-slideUp hidden"
									}`}
								>
									<button
										onClick={() =>
											handleClickDownloadOption(
												"Python",
												`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/media/file/python-portal.zip`
											)
										}
										className="w-full px-4 py-2 text-white hover:text-brand-green"
									>
										Python
									</button>
									<button
										onClick={() =>
											handleClickDownloadOption(
												"Block",
												`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/media/file/block-portal.zip`
											)
										}
										className="w-full px-4 py-2 text-white hover:text-brand-green"
									>
										Block
									</button>
								</div>
							</div>
						</li>
						<li className={styles["nav-link"]} onClick={handleDrawerToggle}>
							<Link href="/faq">FAQ</Link>
						</li>
					</ul>
					<Button
						variant={"shadow"}
						className="px-10 py-5 md:text-xl xl:text-2x text-brand-purple"
						onClick={() => {
							window.open("https://cyobot.myshopify.com", "_blank");
						}}
					>
						Shop
					</Button>
				</div>
			</div>
			{showPopup && (
				<PopupDownloads
					link={downloadOption.link}
					description={downloadOption.description}
					onClose={() => setShowPopup(false)}
				/>
			)}
		</>
	);
}
