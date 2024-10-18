"use client";
import styles from "@/app/components/navbar/link.module.css";
import { Button } from "@/app/components/ui/Button";
import PopupDownloads from "@/app/components/ui/popup/PopupDownloads";
import Link from "next/link";
import { useState } from "react";

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
					<li className={styles["nav-link"]}>
						<Link href="/">Home</Link>
					</li>
					<li className={styles["nav-link"]}>
						<Link href="/about">About</Link>
					</li>
					<li className={styles["nav-link"]}>
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
					<li className={styles["nav-link"]}>
						<Link href="/faq">FAQ</Link>
					</li>
				</ul>
				<Button
					size="lg"
					variant={"shadow"}
					className="md:text-xl xl:text-2xl text-brand-purple font-roboto font-medium"
					onClick={() => {
						window.open("https://cyobot.myshopify.com", "_blank");
					}}
				>
					Shop
				</Button>
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
