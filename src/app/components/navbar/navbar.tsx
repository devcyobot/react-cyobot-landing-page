import Image from 'next/image';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
type NavbarProps = {
	src: string;
	alt: string;
};

export default function Navbar({ src, alt }: NavbarProps) {
	return (
		<header className="z-10 fixed text-2xl flex h-16 lg:h-24 w-screen bg-brand-dark-2 text-white shadow-lg py-10">
			<nav className="flex w-full items-center justify-end sm:flex-col md:flex-row">
				{/* Logo section */}
				<Image
					src={src}
					alt={alt}
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: 'contain',
						maxHeight: '2rem',
						maxWidth: '15.438rem',
					}}
					className="self-center lg:ml-12 ml-5"
				/>
				{/* Lists of other pages and Shop buttons */}
				<DesktopNavBar />
				<MobileNavBar />
			</nav>
		</header>
	);
}
