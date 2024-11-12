import { Link as CustomLink } from "@/app/components/ui/Link";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Kickstarter from "/public/kickstarter.png";
const Banner: FC = () => {
	return (
		<section className="md:relative w-full aspect-video 2xl:aspect-[18/9] bg-black flex flex-col items-center gap-y-3">
			<Link
				className="relative md:absolute w-full h-full"
				target="_blank"
				href="https://www.kickstarter.com/projects/cyobot/cyobot-a-transformable-quadruped-robot-for-innovation-and-fun?fbclid=IwZXh0bgNhZW0CMTEAAR2YwQX2DR0nwytx89OG8r_AO-y_EGh0gTWCmWQxcPi8BlKFY48NkLhAUaw_aem_ad7em1x9laTtyPn0fX4y5w"
			>
				<Image
					src={Kickstarter}
					alt="CYOBot Kickstarter"
					fill
					sizes="90vw"
					priority
					placeholder="blur"
					className="object-center object-contain"
				/>
			</Link>
			<CustomLink
				variant={"shadow"}
				className="mb-3 w-fit bg-brand-purple inset-y-[55%] left-[11%] 2xl:left-[15%] md:absolute py-7 px-12 font-roboto text-white text-lg lg:text-2xl"
				target="_blank"
				href="https://www.kickstarter.com/projects/cyobot/cyobot-a-transformable-quadruped-robot-for-innovation-and-fun?fbclid=IwZXh0bgNhZW0CMTEAAR2YwQX2DR0nwytx89OG8r_AO-y_EGh0gTWCmWQxcPi8BlKFY48NkLhAUaw_aem_ad7em1x9laTtyPn0fX4y5w"
			>
				Visit Campaign
			</CustomLink>
		</section>
	);
};

export default Banner;
