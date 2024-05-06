import Image from 'next/image';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
type NavbarProps = {
	src: string;
	alt: string;
};

export default function Navbar({ src, alt }: NavbarProps) {
	return (
		<header className="text-2xl relative flex h-full lg:h-[9.375rem] bg-brand-purple text-white shadow-lg py-10">
			<nav className="flex w-full items-center justify-end sm:flex-col md:flex-row">
				<Image
					src={src}
					alt={alt}
					quality={100}
					fill
					sizes="(max-width: 600px) 50vw, 100vw"
					style={{
						objectFit: 'cover',
						maxHeight: '2.6rem',
						maxWidth: '15.438rem',
					}}
					className="self-center lg:ml-12 ml-5"
				/>
				<DesktopNavBar />
				<MobileNavBar />
			</nav>
		</header>
	);
}
