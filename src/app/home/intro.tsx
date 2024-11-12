import { Link } from "@/app/components/ui/Link";
import PopupSubscription from "@/app/components/ui/popup/PopupSubscription";
import Image from "next/image";
import IntroMainImage from "/public/intro-robot.png";

export default function Intro() {
	return (
		<>
			<section className="h-[30rem] md:h-[37rem] xl:h-[50rem] pl-9 md:pl-16 xl:pl-20 w-full bg-white text-brand-purple">
				<div className="flex justify-between w-full h-full max-w-[1536px] mx-auto">
					<div className="w-[45%] sm:h-2/3 flex flex-col my-auto gap-y-10 lg:gap-y-20">
						<h1 className="text-black leading-none text-4xl sm:text-5xl lg:text-[4rem] xl:text-[80px]">
							BEST PLATFORM TO MASTER ROBOTICS!
						</h1>
						<div className="w-full flex flex-col gap-y-5 lg:gap-y-8">
							<p className="font-roboto font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full">
								Engineering doesn&rsquo;t have to be that hard. <br />
								Advance your career in 6 months!
							</p>
							<Link
								variant={"positive"}
								className="w-fit p-5 md:p-6 font-roboto text-white text-lg lg:text-2xl"
								href="https://www.roboticsquest.com"
								target="_blank"
							>
								Start Quiz
							</Link>
						</div>
					</div>
					<figure className="relative w-[55%] flex justify-end">
						<Image
							src={IntroMainImage}
							placeholder="blur"
							priority
							alt="Adventurer with mini logos"
							quality={80}
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							style={{
								objectFit: "contain",
								maxHeight: "860px",
								maxWidth: "900px",
							}}
						/>
					</figure>
				</div>
			</section>
			<PopupSubscription />
		</>
	);
}
