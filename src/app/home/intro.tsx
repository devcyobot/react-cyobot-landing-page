import Image from 'next/image';
import { imageIntro } from '../data/imageIntro';

type IntroProps = {
	src: string;
	alt: string;
};

export default function Intro({ src, alt }: IntroProps) {
	return (
		<section className="bg-brand-purple text-white pt-36 flex justify-center items-center pb-20">
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
			<div className="ml-20 mt-10 mr-auto">
				<Image
					src={src}
					alt={alt}
					width={500}
					height={500}
					className="absolute"
				/>
				<div className="relative grid grid-cols-2 gap-56">
					{imageIntro.map((i) => {
						return (
							<Image
								key={i.id}
								src={i.src}
								alt={i.alt}
								width={80}
								height={80}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
