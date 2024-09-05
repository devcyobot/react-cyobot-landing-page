"use client";
import { FC, useState } from "react";

type AccordionQAProps = {
	question: string;
	answer: string;
};

const AccordionQA: FC<AccordionQAProps> = (props) => {
	const [accordionOpen, setAccordionOpen] = useState<Boolean>(false);
	return (
		<div className="py-2 font-roboto text-white">
			<button
				className="flex justify-between w-full"
				onClick={() => setAccordionOpen((prev) => !prev)}
			>
				<span className="py-2 text-xl lg:text-2xl text-start">
					{props.question}
				</span>
				<svg
					className="fill-brand-green shrink-0 ml-8"
					width="16"
					height="16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center transition duration-200 ease-out ${
							accordionOpen && "!rotate-180"
						}`}
					/>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center rotate-90 transition duration-200 ease-out ${
							accordionOpen && "!rotate-180"
						}`}
					/>
				</svg>
			</button>
			<div
				className={`grid overflow-hidden transition-all duration-300 ease-in-out text-brand-gray-light text-base lg:text-lg ${
					accordionOpen
						? "grid-rows-[1fr] opacity-100"
						: "grid-rows-[0fr] opacity-0"
				}`}
			>
				<p className="overflow-hidden font-nunito font-light">{props.answer}</p>
			</div>
		</div>
	);
};

export default AccordionQA;
