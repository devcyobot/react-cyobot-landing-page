import Image from 'next/image';
import { imageIntro } from '../data/imageIntro';

type IntroProps = {
	src: string;
	alt: string;
};

export default function Intro({ src, alt }: IntroProps) {
	return (
		<section className="bg-brand-purple text-white pt-60 flex justify-center items-center pb-20">
			<div className="flex flex-col w-4/12 ml-52">
				<h1 className="leading-none pb-3 text-7xl">
					BEST PLATFORM TO MASTER ROBOTICS!
				</h1>
				<form>
					<label htmlFor="user-email">
						Engineer doesn&rsquo;t have to be that hard. Advance your career in
						6 months!
						<div>
							<input
								type="text"
								id="user-email"
								placeholder="Your email"
								className="mt-6 px-3 py-2 text-black border-none"
							/>
							<button type="submit" className="bg-brand-green p-2 font-bold">
								Star Quest
							</button>
						</div>
					</label>
				</form>
			</div>
			<div className="ml-20 mr-auto">
				<Image
					src={src}
					alt={alt}
					width={500}
					height={500}
					className="absolute"
				/>
				<Image
					src={imageIntro[0].src}
					alt={imageIntro[0].alt}
					width={100}
					height={100}
					className="relative left-10"
				/>
				<Image
					src={imageIntro[1].src}
					alt={imageIntro[1].alt}
					width={50}
					height={50}
					className="relative bottom-36 left-80"
				/>
				<Image
					src={imageIntro[2].src}
					alt={imageIntro[2].alt}
					width={70}
					height={70}
					className="relative top-32"
				/>
				<Image
					src={imageIntro[3].src}
					alt={imageIntro[3].alt}
					width={90}
					height={90}
					className="relative left-96"
				/>
			</div>
		</section>
	);
}
