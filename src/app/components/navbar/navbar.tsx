import Image from "next/image";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import Link from "next/link";
import Logo from "../../../../public/cyobot-logo.png";

export default function Navbar() {
	return (
		<header className="z-20 fixed text-2xl flex h-16 lg:h-24 w-screen bg-brand-dark-2 text-white shadow-lg">
			<nav className="grid grid-cols-[1fr_2fr] w-full items-center justify-center sm:flex-col md:flex-row">
				{/* Logo section */}
				<button>
					<Link href="/">
						<figure className="relative w-32 lg:w-44 h-8 lg:h-9 ml-10 mr-auto">
							<Image
								src={Logo}
								alt="CYOBot logo"
								quality={80}
								fill
								priority
								sizes="(max-width: 640px) 50vw, 33vw"
								style={{
									objectFit: "contain",
								}}
							/>
						</figure>
					</Link>
				</button>
				{/* Lists of other pages and Shop buttons */}
				<DesktopNavBar />
				<MobileNavBar />
			</nav>
		</header>
	);
}
