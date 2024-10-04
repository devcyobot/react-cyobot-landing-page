"use client";
import Parallelogram from "../components/ui/parallelogram";
import { stepsData } from "../data/stepsData";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Steps() {
	const [width, setWidth] = useState(0);
	const slider = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateWidth = () => {
			if (slider.current) {
				setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
			}
		};

		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	return (
		<section className="bg-brand-purple-dark py-20 overflow-hidden">
			<motion.div ref={slider}>
				<motion.div
					whileTap={{ cursor: "grabbing" }}
					className="flex w-max mx-auto"
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
				>
					{stepsData.map((item, index) => (
						<Parallelogram
							key={`step-parallelogram-${index}`}
							num={index + 1}
							label={item.label}
							description={item.description}
							link={item.link}
						/>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
