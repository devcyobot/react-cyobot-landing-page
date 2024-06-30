import Image from 'next/image';
import { imageIntro } from '../data/imageIntro';
import Link from 'next/link';

export default function Intro() {
	return (
		<section className="h-[40rem] lg:h-[50rem] pl-16 lg:pl-20 w-full max-w-[1440px] pt-16 xl:pt-24 mx-auto bg-white text-brand-purple flex justify-between">
			<div className="w-1/2 lg:w-[35%] h-2/3 flex flex-col my-auto">
				<h1 className="lg:mb-10 xl:mb-0 h-1/3 text-black leading-none text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl">
					BEST PLATFORM TO MASTER ROBOTICS!
				</h1>
				<form className="h-full lg:h-2/3 w-full mt-20 flex flex-col gap-y-5 lg:gap-y-8">
					<label
						htmlFor="user-email"
						className="font-roboto font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.7rem] w-full"
					>
						Engineer doesn&rsquo;t have to be that hard. <br /> Advance your
						career in 6 months!
					</label>
					<div className="w-full h-1/3 sm:h-1/5 md:h-1/4 lg:h-1/5 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-center">
						<input
							type="text"
							id="user-email"
							placeholder="Your email"
							className="font-roboto rounded-r-md sm:rounded-r-none rounded-l-md bg-brand-gray-light text-brand-gray-dark font-light h-full w-full sm:w-1/2 md:w-2/3 px-6 py-1 md:text-xl text-lg"
						/>
						<button
							type="button"
							className="rounded-l-md sm:rounded-l-none rounded-r-md bg-brand-green text-white lg:text-xl xl:text-2xl font-normal w-2/3 sm:w-28 xl:w-36 h-full"
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
				</form>
			</div>
			<div className="top-5 lg:top-0 relative w-[55%] h-full flex justify-end">
				<Image
					src="/intro-robot.png"
					alt="Adventurer with mini logos"
					quality={100}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					style={{
						objectFit: 'contain',
						maxHeight: '860px',
						maxWidth: '900px',
					}}
				/>
			</div>
		</section>
	);
}
