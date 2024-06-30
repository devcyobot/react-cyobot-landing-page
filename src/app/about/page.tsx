import Image from 'next/image';

export default function About() {
	return (
		<main className="h-full flex flex-col justify-evenly items-center">
			<div className="mt-28 w-screen h-[40rem] flex flex-col justify-center">
				<h1 className="text-7xl text-center w-full px-10">
					WE MAKE LEARNING ROBOTICS AN EXCITING EXPERIENCE WITH REAL-LIFE
					EXAMPLES FROM THE ENGINEERING INDUSTRIES
				</h1>
				<figure className="relative">
					<Image
						src="/about-frame.png"
						alt="CYOBot Teams"
						quality={100}
						fill
						sizes="100vw"
						className="max-h-96"
						style={{
							objectFit: 'contain',
						}}
					/>
				</figure>
			</div>
			<figure className="relative w-screen h-[62rem]">
				<Image
					src="/about-main.png"
					alt="CYOBot Teams"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: 'contain',
					}}
				/>
			</figure>
			<div className="px-16 mt-10">
				<h2 className="font-roboto font-medium text-4xl text-center">
					At CYOBot, we are passionate about bridging the gap between
					traditional education and the fast-paced world of robotics. In an era
					where emerging technologies are evolving rapidly, the demand for a
					highly skilled workforce has never been greater. Yet, conventional
					classroom-based robotics education struggles to keep pace with
					industry advancements.
					<span className="block mt-20">This is where CYOBot steps in.</span>
				</h2>
			</div>
		</main>
	);
}
