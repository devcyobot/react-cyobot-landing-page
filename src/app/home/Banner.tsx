import { Link } from "@/app/components/ui/Link";
import Image from "next/image";
import { FC } from "react";
import Kickstarter from "/public/kickstarter.png";
const Banner: FC = () => {
	return (
		<section className="relative w-full aspect-video 2xl:aspect-[18/9] bg-black">
			<Image
				src={Kickstarter}
				alt="CYOBot Kickstarter"
				fill
				sizes="100vw"
				priority
				placeholder="blur"
				className="object-center object-contain"
			/>
			<Link
				variant={"positive"}
				className="h-5 px-2 inset-y-[55%] left-[11%] 2xl:left-[15%] absolute sm:p-5 lg:p-6 font-roboto text-white text-[12px] sm:text-lg lg:text-2xl"
				target="_blank"
				href="https://www.kickstarter.com/projects/cyobot/cyobot-a-transformable-quadruped-robot-for-innovation-and-fun?fbclid=IwZXh0bgNhZW0CMTEAAR2YwQX2DR0nwytx89OG8r_AO-y_EGh0gTWCmWQxcPi8BlKFY48NkLhAUaw_aem_ad7em1x9laTtyPn0fX4y5w"
			>
				Visit Campaign
			</Link>
		</section>
	);
};

export default Banner;
