import Image from 'next/image';

export default function About() {
	return (
		<main className="flex flex-col justify-evenly items-center">
			<h1 className="text-7xl text-center w-4/5">
				MAKE LEARNING ROBOTICS AN EXCITING EXPERIENCE WITH REAL-LIFE EXAMPLES
				FROM THE ENGINEERING INDUSTRIES
			</h1>
			<figure className="relative w-[100rem] h-[100rem]">
				<Image
					src="/about-main.png"
					alt="CYOBot Teams"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: 'contain',
						maxHeight: '860px',
						maxWidth: '900px',
					}}
				/>
				{/* <Image
					src="/about-robots.png"
					alt="CYOBot Robots Models"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: 'contain',
						maxHeight: '860px',
						maxWidth: '900px',
					}}
				/> */}
			</figure>
		</main>
	);
}
