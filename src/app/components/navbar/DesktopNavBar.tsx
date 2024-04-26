import Link from 'next/link';
import styles from './link.module.css';

export default function DesktopNavBar() {
	return (
		<div className="w-[55%] lg:flex hidden items-center justify-between mr-12">
			<ul className="flex justify-around">
				<li className={styles.navLink}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.navLink}>
					<Link href="/about">About</Link>
				</li>
				<li className={styles.navLink}>
					<Link href="/downloads">Downloads</Link>
				</li>
				<li className={styles.navLink}>
					<Link href="/events">Events</Link>
				</li>
			</ul>
			<button
				type="button"
				className="w-32 h-12 text-brand-purple bg-white shadow-md rounded-lg border-none font-bold justify-self-end"
			>
				Shop
			</button>
		</div>
	);
}
