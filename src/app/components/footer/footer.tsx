import Image from "next/image";
import Link from "next/link";
import { options } from "../../data/FooterLinks";

export default function Footer() {
	return (
		<footer className="hidden sm:block h-56 bg-brand-dark-2 w-full p-6">
			<div className="max-w-[1536px] mx-auto text-start h-full w-full grid grid-cols-[2fr_1fr_1fr_1fr] gap-x-5 grid-rows-1">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 items-center">
					<div className="h-2/3 w-full grid grid-cols-1 grid-rows-2 justify-items-center items-center gap-y-0">
						<div className="relative h-full w-full">
							<Image
								src="/cyobot-logo.png"
								alt="CYOBot logo"
								quality={80}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-contain h-full w-full"
							/>
						</div>
						<p className="h-auto w-auto font-roboto text-base lg:text-lg text-white">
							©2024 CYOBot, All right reserved.
						</p>
					</div>
					<div className="relative h-full w-full">
						<Image
							src="/intro-robot.png"
							alt="CYOBot logo"
							quality={80}
							fill
							sizes="50vw"
							style={{
								objectFit: "contain",
							}}
						/>
					</div>
				</div>
				<div className="text-white font-vt323 h-full w-full flex flex-col justify-evenly">
					<h4 className="font-vt323 text-xl lg:text-2xl xl:text-3xl">
						PRODUCTS
					</h4>
					<ul>
						<li className="text-base lg:text-lg xl:text-xl hover:underline">
							<Link
								href="https://cyobot.myshopify.com/products/cyocrawler"
								passHref={true}
								target="_blank"
							>
								CYOCrawler
							</Link>
						</li>
						<li className="text-base lg:text-lg xl:text-xl hover:underline">
							<Link
								href="https://cyobot.myshopify.com/products/cyobot-main-board-esp32-microcontroller"
								passHref={true}
								target="_blank"
							>
								CYOBrain Builder Kit
							</Link>
						</li>
						<li className="text-base lg:text-lg xl:text-xl hover:underline">
							<Link
								href="https://quest.cyobot.com/"
								passHref={true}
								target="_blank"
							>
								Dashboard
							</Link>
						</li>
						<li className="text-base lg:text-lg xl:text-xl hover:underline">
							<Link
								href="https://www.roboticsquest.com/"
								passHref={true}
								target="_blank"
							>
								RoboticsQuest
							</Link>
						</li>
					</ul>
				</div>
				<div className="text-white font-vt323 h-full w-full flex flex-col justify-evenly">
					<h4 className="font-vt323 text-lg sm:text-xl lg:text-2xl xl:text-3xl">
						RESOURCES
					</h4>
					<ul>
						<li className="text-base lg:text-lg xl:text-xl hover:underline">
							<Link
								href="https://wiki.cyobot.com"
								passHref={true}
								target="_blank"
							>
								Wiki
							</Link>
						</li>
						<li className="text-base lg:text-lg xl:text-xl hover:underline">
							<Link
								href="https://www.kickstarter.com/projects/cyobot/cyocrawler-building-tomorrows-innovators"
								passHref={true}
								target="_blank"
							>
								Kickstarter
							</Link>
						</li>
						<li className="text-base lg:text-lg xl:text-xl hover:underline">
							<Link
								href="https://www.roboticsquest.com/cyobot-privacy-policy.pdf"
								passHref={true}
								target="_blank"
							>
								Privacy Policy
							</Link>
						</li>
						<li className="text-base lg:text-lg xl:text-xl hover:underline">
							<Link
								href="https://www.roboticsquest.com/cyobot-terms-and-conditions.pdf"
								passHref={true}
								target="_blank"
							>
								Terms & Conditions
							</Link>
						</li>
					</ul>
				</div>
				<div className="text-white font-vt323 h-full w-full flex flex-col justify-evenly">
					<h4 className="font-vt323 text-xl lg:text-2xl xl:text-3xl">
						GET IN TOUCH
					</h4>
					<ul className="flex justify-between w-full lg:w-4/5 mx-auto sm:mx-0 max-w-96">
						<Link
							passHref={true}
							target="_blank"
							href={options[0].link}
							className="relative bg-brand-dark-2 w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14 overflow-hidden rounded-xl flex items-center justify-center hover:bg-gray-500 transition-colors"
						>
							<div className="absolute inset-0">
								<Image
									src={options[0].src}
									alt={options[0].alt}
									fill
									sizes="33vw"
									style={{ objectFit: "contain" }}
								/>
							</div>
						</Link>
						<Link
							passHref={true}
							target="_blank"
							href={options[1].link}
							className="relative bg-brand-dark-2 w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14 rounded-full overflow-hidden flex items-center justify-center hover:bg-gray-500 transition-colors"
						>
							<div className="absolute inset-0">
								<Image
									src={options[1].src}
									alt={options[1].alt}
									fill
									sizes="33vw"
									style={{ objectFit: "cover", transform: "scale(1.07)" }}
								/>
							</div>
						</Link>
						<Link
							passHref={true}
							target="_blank"
							href={options[2].link}
							className="relative bg-brand-dark-2 w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14 rounded-full overflow-hidden flex items-center justify-center hover:bg-gray-500 transition-colors"
						>
							<div className="absolute inset-0">
								<Image
									src={options[2].src}
									alt={options[2].alt}
									fill
									sizes="33vw"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</Link>
					</ul>
					<div>
						<p className="text-base lg:text-lg xl:text-xl">
							team.cyobot@gmail.com
						</p>
						<p className="text-base lg:text-lg xl:text-xl">Dover, DE, 19901</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
