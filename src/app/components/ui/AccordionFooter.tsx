"use client";
import Link from "next/link";
import { FC, useState } from "react";

type AccordionFooterProps = {
	sectionName: string;
	list: { title: string; link: string }[];
};

const AccordionQA: FC<AccordionFooterProps> = (props) => {
	const [accordionOpen, setAccordionOpen] = useState<Boolean>(false);
	return (
		<div className="py-2 font-vt323 text-white">
			<button
				className="flex justify-between w-full"
				onClick={() => setAccordionOpen((prev) => !prev)}
			>
				<span className="py-2 text-xl lg:text-2xl text-start w-full">
					{props.sectionName}
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
			<ul
				className={`overflow-hidden transition-all duration-300 ease-in-out text-white text-base ${
					accordionOpen
						? `max-h-fit grid-rows-${props.list.length} opacity-100`
						: "max-h-0 grid-rows-0 opacity-0"
				}`}
			>
				{props.list.map((item, i) => (
					<li key={i} className="overflow-hidden">
						<Link
							href={item.link}
							target="_blank"
							passHref={true}
							className="overflow-hidden"
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AccordionQA;
