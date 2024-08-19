"use client";
import Link from "next/link";
import styles from "./link.module.css";
import { useState } from "react";
import DownloadButton from "../ui/button/DownloadButton";
import PopupDownloads from "../ui/popup/PopupDownloads";

export default function DesktopNavBar() {
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

	return (
		<>
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
								className={`text-center absolute mt-2 w-44 bg-brand-dark rounded-md shadow-lg z-20 transition-all duration-300 ${
									isDropdownOpen
										? "animate-slideDown"
										: "animate-slideUp hidden"
								}`}
							>
								<button
									onClick={() =>
										handleClickDownloadOption(
											"Python",
											"https://drive.google.com/uc?%20export=download&id=1YfRPhSK-S0nsumdJqDb-pdz0eq0X9PQ1"
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
											"https://drive.google.com/uc?%20export=download&id=1iAsTuD3ixco-J1ERjiKxOyPH6YPlRRy2"
										)
									}
									className="w-full px-4 py-2 text-white hover:text-brand-green"
								>
									Block
								</button>
							</div>
						</div>
					</li>
					<li className={styles.navLink}>
						<Link href="/faq">FAQ</Link>
					</li>
				</ul>
				<Link
					className="flex justify-center items-center hover:shadow-[4px_4px_4px_#1AD69C] font-roboto text-lg lg:text-xl xl:text-2xl font-medium py-1 lg:py-2 px-3 lg:px-12 text-brand-purple bg-white shadow-md rounded-lg border-none"
					href="https://cyobot.myshopify.com/"
					passHref={true}
					target="_blank"
				>
					Shop
				</Link>
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
