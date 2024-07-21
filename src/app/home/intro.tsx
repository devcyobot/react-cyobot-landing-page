import Image from "next/image";
import { imageIntro } from "../data/imageIntro";
import Link from "next/link";

export default function Intro() {
	return (
		<section className="h-[40rem] lg:h-[50rem] pl-16 lg:pl-20 w-full pt-16 xl:pt-24 bg-white text-brand-purple">
			<div className="flex justify-between w-full h-full max-w-[1440px] mx-auto">
				<div className="w-1/2 lg:w-[35%] h-2/3 flex flex-col my-auto">
					<h1 className="lg:mb-10 xl:mb-0 h-1/3 text-black leading-none text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl">
						BEST PLATFORM TO MASTER ROBOTICS!
					</h1>
					<div className="h-full lg:h-2/3 w-full mt-20 flex flex-col gap-y-5 lg:gap-y-8">
						<p className="font-roboto font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.7rem] w-full">
							Engineering doesn&rsquo;t have to be that hard. <br /> Advance
							your career in 6 months!
						</p>
						<button
							type="button"
							className="rounded-lg bg-brand-green text-white md:text-xl xl:text-2xl font-normal w-2/3 sm:w-28 xl:w-36 h-full max-h-10"
						>
							<Link
								href="https://www.roboticsquest.com/"
								passHref={true}
								target="_blank"
							>
								Start Quest
							</Link>
						</button>
					</div>
				</div>
				<div className="top-5 lg:top-0 relative w-[55%] h-full flex justify-end">
					<Image
						src="/intro-robot.png"
						alt="Adventurer with mini logos"
						quality={100}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						style={{
							objectFit: "contain",
							maxHeight: "860px",
							maxWidth: "900px",
						}}
					/>
				</div>
			</div>
		</section>
	);
}
