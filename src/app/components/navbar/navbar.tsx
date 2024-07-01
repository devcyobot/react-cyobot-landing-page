import Image from 'next/image';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
type NavbarProps = {
	src: string;
	alt: string;
};

export default function Navbar({ src, alt }: NavbarProps) {
	return (
		<header className="z-20 fixed text-2xl flex h-16 lg:h-24 w-screen bg-brand-dark-2 text-white shadow-lg">
			<nav className="grid grid-cols-[1fr_2fr] w-full items-center justify-center sm:flex-col md:flex-row">
				{/* Logo section */}
				<figure className="relative w-32 lg:w-44 h-8 lg:h-9 ml-10 mr-auto">
					<Image
						src={src}
						alt={alt}
						quality={100}
						fill
						sizes="100vw"
						style={{
							objectFit: 'contain',
						}}
					/>
				</figure>
				{/* Lists of other pages and Shop buttons */}
				<DesktopNavBar />
				<MobileNavBar />
			</nav>
		</header>
	);
}
