import Link from 'next/link';
import styles from './link.module.css';

export default function DesktopNavBar() {
	return (
		<div className="text-lg lg:text-xl xl:text-2xl font-roboto w-[65%] md:flex hidden items-center justify-between mr-12">
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
