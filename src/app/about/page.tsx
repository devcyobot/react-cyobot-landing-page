import Image from 'next/image';
import { AboutData } from '../data/AboutData';
import AboutCard from '../components/ui/AboutCard';
import { TeamImageData } from '../data/TeamImageData';
import TeamImageCard from '../components/ui/TeamImageCard';

export default function About() {
	return (
		<main className="w-full mx-auto bg-brand-gray-light flex flex-col justify-evenly items-center">
			<div className="bg-white w-full relative mt-16 lg:mt-24 h-auto flex justify-center items-center">
				<h1 className="max-w-[1440px] z-10 py-14 sm:py-28 lg:py-32 xl:py-48 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center w-full px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20">
					WE MAKE LEARNING ROBOTICS AN EXCITING EXPERIENCE WITH REAL-LIFE
					EXAMPLES FROM THE ENGINEERING INDUSTRIES
				</h1>
				<div className="hidden absolute inset-0 sm:flex justify-center items-center">
					<Image
						src="/about-frame.png"
						alt="CYOBot Teams"
						quality={100}
						fill
						sizes="100vw"
						className="object-contain max-w-[90rem] max-h-[50rem] mx-auto"
					/>
				</div>
			</div>
			<figure className="relative w-full h-[20rem] sm:h-[32rem] md:h-[42rem] lg:h-[52rem] xl:h-[62rem]">
				<Image
					src="/about-main.png"
					alt="CYOBot Teams"
					quality={100}
					fill
					sizes="100vw"
					className="object-contain w-full h-full"
				/>
			</figure>
			<section className="max-w-[1440px] mb-24 w-4/5 h-full sm:px-7 lg:px-16 mt-10 gap-y-20 flex flex-col items-center justify-evenly">
				<p className="font-roboto font-medium text-xl sm:text-2xl lg:text-3xl text-center">
					At CYOBot, we are passionate about bridging the gap between
					traditional education and the fast-paced world of robotics. In an era
					where emerging technologies are evolving rapidly, the demand for a
					highly skilled workforce has never been greater. Yet, conventional
					classroom-based robotics education struggles to keep pace with
					industry advancements.
					<span className="block mt-14">This is where CYOBot steps in.</span>
				</p>
				{AboutData.map((item, i) => {
					return (
						<AboutCard
							key={`about-card-${i}`}
							src={item.src}
							label={item.label}
							description={item.description}
							description2={item.description2}
							color={item.color}
						/>
					);
				})}
			</section>
			<section className="flex flex-col items-center bg-brand-dark-2 w-full h-auto">
				<h2 className="text-white font-vt32 text-4xl sm:text-5xl lg:text-6xl p-14">
					MEET THE TEAM
				</h2>
				<div className="max-w-72 md:max-w-[75rem] w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 xl:gap-12">
					{TeamImageData.map((item, i) => {
						return (
							<TeamImageCard
								key={`team-image-card-${i}`}
								src={item.src}
								alt={item.alt}
								icon={item.icon}
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
}
