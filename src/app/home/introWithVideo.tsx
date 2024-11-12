"use client";
import { Button } from "@/app/components/ui/Button";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

export default function IntroWithVideo(): JSX.Element {
	const [isVideoVisible, setIsVideoVisible] = useState<boolean>(true);
	const [isTitleVisible, setIsTitleVisible] = useState<boolean>(false);

	const handleVideoEnd = (): void => {
		setIsVideoVisible(false);
		setTimeout(() => {
			setIsTitleVisible(true);
		}, 500);
	};

	const handleReplay = (): void => {
		setIsVideoVisible(true);
		setIsTitleVisible(false);
	};

	const titleText: string = "MASTER ROBOTICS WITH US!";
	const titleChars: string[] = titleText.split("");

	const containerVariants: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const childVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<section className="relative h-[30rem] lg:h-[40rem] w-full text-white">
			{isVideoVisible ? (
				<video
					src={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/media/file/intro.mp4`}
					className="absolute top-0 left-0 w-full h-full object-cover"
					controls
					playsInline
					autoPlay
					onEnded={handleVideoEnd}
				/>
			) : (
				<div className="relative z-10 h-full w-full px-9 sm:pl-16 lg:pl-20 bg-brand-dark-2 flex flex-col items-center justify-center">
					{isTitleVisible && (
						<motion.h1
							className="leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center"
							variants={containerVariants}
							initial="hidden"
							animate="visible"
						>
							{titleChars.map((char: string, index: number) => (
								<motion.span key={index} variants={childVariants}>
									{char === " " ? "\u00A0" : char}
								</motion.span>
							))}
						</motion.h1>
					)}
					<div className="mt-10 flex gap-4">
						<Button
							variant="positive"
							className="text-white sm:text-xl xl:text-2xl hover:scale-110"
							onClick={() => {
								window.open(
									"https://www.kickstarter.com/projects/cyobot/cyobot-a-transformable-quadruped-robot-for-innovation-and-fun",
									"_blank"
								);
							}}
						>
							Watch More
						</Button>
						<Button
							variant="positive"
							className="text-white sm:text-xl xl:text-2xl hover:scale-110"
							onClick={handleReplay}
						>
							Play Again
						</Button>
					</div>
				</div>
			)}
		</section>
	);
}
