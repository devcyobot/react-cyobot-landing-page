import Image from 'next/image';
import { imageIntro } from '../data/imageIntro';

export default function Intro() {
	return (
		<section className="bg-brand-purple text-white flex lg:flex-row flex-col items-center h-[45rem] lg:pl-32 pt-10">
			<div className="w-[70%] lg:w-2/5 h-1/2 lg:h-full flex flex-col pt-10">
				<h1 className="leading-none  text-6xl lg:text-font-80px">
					BEST PLATFORM TO MASTER ROBOTICS!
				</h1>
				<form className="mt-9">
					<label htmlFor="user-email">
						<p className="text-2xl lg:text-font-28px w-full lg:w-4/5">
							Engineer doesn&rsquo;t have to be that hard. Advance your career
							in 6 months!
						</p>
						<div className="w-full">
							<input
								type="text"
								id="user-email"
								placeholder="Your email"
								className="md:h-[3.563rem] md:w-[21.125rem] w-1/2 mt-9 px-3 py-2 text-black border-none md:text-2xl text-xl"
							/>
							<button
								type="submit"
								className="bg-brand-green md:text-2xl text-xl md:w-[10.375rem] md:h-[3.563rem] h-11"
							>
								Star Quest
							</button>
						</div>
					</label>
				</form>
			</div>
			<div className="top-5 lg:top-0 relative w-1/2 h-full flex justify-end ml-10">
				<Image
					src="/intro.png"
					alt="Adventurer with mini logos"
					quality={100}
					fill
					sizes="(max-width: 1440px) 100vw"
					style={{
						objectFit: 'contain',
						maxHeight: '559px',
						maxWidth: '650px',
					}}
				/>
			</div>
		</section>
	);
}
