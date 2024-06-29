import Image from 'next/image';
import { imageIntro } from '../data/imageIntro';

export default function Intro() {
	return (
		<section className="h-[50rem] lg:pl-20 w-full max-w-[1440px] pt-16 xl:pt-24 mx-auto bg-white text-brand-purple flex lg:flex-row flex-col justify-between ">
			<div className="w-auto lg:w-[35%] h-1/2 lg:h-2/3 flex flex-col my-auto">
				<h1 className="text-black leading-none text-5xl md:text-6xl lg:text-7xl">
					BEST PLATFORM TO MASTER ROBOTICS!
				</h1>
				<form className="w-full mt-20">
					<label
						htmlFor="user-email"
						className="font-roboto font-medium text-xl lg:text-[1.7rem] w-full"
					>
						Engineer doesn&rsquo;t have to be that hard. <br /> Advance your
						career in 6 months!
						<div className="w-full h-full">
							<input
								type="text"
								id="user-email"
								placeholder="Your email"
								className="font-roboto rounded-l-md bg-brand-gray-light text-brand-gray-dark font-light md:h-1/3 h-11 md:w-2/3 w-1/2 mt-9 px-6 py-1 md:text-xl text-lg"
							/>
							<button
								type="submit"
								className="rounded-r-md bg-brand-green text-white md:text-2xl text-lg font-normal md:w-36 md:h-1/3 h-11"
							>
								Star Quest
							</button>
						</div>
					</label>
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
