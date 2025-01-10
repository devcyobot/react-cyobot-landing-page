import { options, productsLinks, resourcesLinks } from "@/app/data/FooterLinks";
import Image from "next/image";
import Link from "next/link";
function DesktopFooter() {
	return (
		<footer className="hidden lg:block h-56 bg-brand-dark-2 w-full p-6">
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
						<p className="h-auto w-auto font-roboto text-lg text-white">
							©2024 CYOBot, All right reserved.
						</p>
					</div>
					<div className="relative h-full w-full">
						<Image
							src="/intro-robot.png"
							alt=""
							quality={80}
							fill
							sizes="50vw"
							style={{
								objectFit: "contain",
							}}
						/>
					</div>
				</div>
				<div className="text-2xl text-white font-vt323 h-full w-full grid grid-rows-[1fr_3fr] gap-y-3">
					<h2 className="my-auto">PRODUCTS</h2>
					<ul>
						{productsLinks.map((link, i) => {
							return (
								<li key={i} className="hover:underline">
									<Link href={link.link} target="_blank">
										{link.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="text-2xl text-white font-vt323 h-full w-full grid grid-rows-[1fr_3fr] gap-y-3">
					<h2 className="my-auto">RESOURCES</h2>
					<ul>
						{resourcesLinks.map((link, i) => {
							return (
								<li key={i} className="hover:underline">
									<Link href={link.link} target="_blank">
										{link.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="text-2xl text-white font-vt323 h-full w-full grid grid-rows-[1fr_3fr] gap-y-3">
					<h2 className="text-2xl my-auto">GET IN TOUCH</h2>
					<div className="flex flex-col gap-y-3">
						<ul className="flex justify-between w-full lg:w-4/5 mx-auto sm:mx-0 max-w-96">
							<li>
								<Link
									aria-label="CYOBot Instagram"
									target="_blank"
									href={options[0].link}
									className="relative bg-brand-dark-2 w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14 overflow-hidden rounded-xl flex items-center justify-center hover:bg-gray-500 transition-colors"
								>
									<div className="absolute inset-0">
										<Image
											src={options[0].src}
											alt=""
											fill
											sizes="33vw"
											style={{ objectFit: "contain" }}
										/>
									</div>
								</Link>
							</li>
							<li>
								<Link
									aria-label="CYOBot Github"
									target="_blank"
									href={options[1].link}
									className="relative bg-brand-dark-2 w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14 rounded-full overflow-hidden flex items-center justify-center hover:bg-gray-500 transition-colors"
								>
									<div className="absolute inset-0">
										<Image
											src={options[1].src}
											alt=""
											fill
											sizes="33vw"
											style={{ objectFit: "cover", transform: "scale(1.07)" }}
										/>
									</div>
								</Link>
							</li>
							<li>
								<Link
									aria-label="CYOBot Facebook"
									target="_blank"
									href={options[2].link}
									className="relative bg-brand-dark-2 w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14 rounded-full overflow-hidden flex items-center justify-center hover:bg-gray-500 transition-colors"
								>
									<div className="absolute inset-0">
										<Image
											src={options[2].src}
											alt=""
											fill
											sizes="33vw"
											style={{ objectFit: "cover" }}
										/>
									</div>
								</Link>
							</li>
						</ul>
						<div>
							<p>team.cyobot@gmail.com</p>
							<p>Dover, DE, 19901</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default DesktopFooter;
