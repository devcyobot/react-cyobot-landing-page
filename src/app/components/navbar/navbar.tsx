import Image from 'next/image';
import NavLink from './link';

type NavbarProps = {
	src: string;
	alt: string;
};

export default function Navbar({ src, alt }: NavbarProps) {
	return (
		<header className="absolute w-full p-6 px-20 flex justify-between bg-brand-purple text-white shadow-lg">
			<Image src={src} alt={alt} width={240} height={40} />
			<nav className="flex items-center">
				<ul className="flex justify-around">
					<NavLink href="/" title="Home" />
					<NavLink href="/about" title="About" />
					<NavLink href="/downloads" title="Downloads" />
					<NavLink href="/events" title="Events" />
				</ul>
			</nav>
			<button
				type="button"
				className="w-20 h-12 text-brand-purple bg-white shadow-md rounded-lg border-none text-lg font-bold"
			>
				Shop
			</button>
		</header>
	);
}
