'use client';
import Link from 'next/link';
import styles from './link.module.css';
import { useState } from 'react';

export default function MobileNavBar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	function handleDrawerToggle() {
		setIsDrawerOpen(!isDrawerOpen);
	}

	return (
		<div className="lg:hidden flex flex-col self-end">
			<button
				onClick={handleDrawerToggle}
				className="h-12 text-brand-purple bg-white shadow-md rounded-lg border-none text-2xl font-bold mr-5"
			>
				menu
			</button>
			<div
				className={
					isDrawerOpen
						? 'z-10 lg:hidden absolute top-[86px] right-0 bottom-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-brand-purple-dark text-white ease-in duration-300'
						: 'z-10 lg:hidden absolute top-[86px] right-0 -left-full flex flex-col justify-center items-center w-full h-screen bg-brand-purple-dark text-white ease-in duration-300'
				}
			>
				<ul className="h-1/2 text-2xl flex flex-col items-center justify-evenly">
					<li className={styles.navLink} onClick={handleDrawerToggle}>
						<Link href="/">Home</Link>
					</li>
					<li className={styles.navLink} onClick={handleDrawerToggle}>
						<Link href="/about">About</Link>
					</li>
					<li className={styles.navLink} onClick={handleDrawerToggle}>
						<Link href="/downloads">Downloads</Link>
					</li>
					<li className={styles.navLink} onClick={handleDrawerToggle}>
						<Link href="/events">Events</Link>
					</li>
				</ul>
				<button
					type="button"
					className="h-12 text-brand-purple bg-white shadow-md rounded-lg border-none text-2xl font-bold justify-self-end"
				>
					Shop
				</button>
			</div>
		</div>
	);
}
