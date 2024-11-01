import DesktopNavBar from "@/app/components/navbar/DesktopNavBar";
import MobileNavBar from "@/app/components/navbar/MobileNavBar";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<header className="z-20 fixed -top-0 text-2xl flex h-16 lg:h-24 w-screen bg-brand-dark-2 text-white shadow-lg">
			<nav className="grid grid-cols-[1fr_3fr] w-full items-center justify-center sm:flex-col md:flex-row">
				{/* Logo section */}
				<Link href="/">
					<figure className="relative w-32 lg:w-44 h-8 lg:h-9 ml-10 mr-auto">
						<Image
							src={"/cyobot-logo.png"}
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
				{/* Lists of other pages and Shop buttons */}
				<DesktopNavBar />
				<MobileNavBar />
			</nav>
		</header>
	);
}
