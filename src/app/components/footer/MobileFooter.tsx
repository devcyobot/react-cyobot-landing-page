import Image from "next/image";
import Link from "next/link";
import AccordionFooter from "../ui/AccordionFooter";
import { options, productsLinks, resourcesLinks } from "../../data/FooterLinks";

export default function MobileFooter() {
	return (
		<footer className="sm:hidden h-auto bg-brand-dark-2 w-full p-6 flex flex-col justify-evenly">
			<div className="h-full w-full grid grid-cols-1 grid-rows-2 justify-items-center items-center gap-y-2 sm:gap-y-0">
				<div className="relative h-full w-full">
					<Image
						src="/cyobot-logo.png"
						alt="CYOBot logo"
						quality={80}
						fill
						sizes="(max-width: 640px) 50vw"
						className="object-contain h-full w-full"
					/>
				</div>
				<p className="h-auto w-auto font-roboto text-sm sm:text-base lg:text-lg text-white">
					©2024 CYOBot, All right reserved.
				</p>
			</div>
			<div className="w-full h-full divide-y">
				<AccordionFooter sectionName="PRODUCTS" list={productsLinks} />
				<AccordionFooter sectionName="RESOURCES" list={resourcesLinks} />
				<div className="text-white font-vt323 h-40 w-full flex flex-col justify-evenly">
					<h4 className="font-vt323 text-xl">GET IN TOUCH</h4>
					<ul className="flex justify-between w-1/2">
						<Link
							passHref={true}
							target="_blank"
							href={options[0].link}
							className="relative bg-brand-dark-2 w-10 h-10 overflow-hidden rounded-xl flex items-center justify-center"
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
							className="relative bg-brand-dark-2 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
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
							className="relative bg-brand-dark-2 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
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
						<p className="text-base">team.cyobot@gmail.com</p>
						<p className="text-base">Dover, DE, 19901</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
