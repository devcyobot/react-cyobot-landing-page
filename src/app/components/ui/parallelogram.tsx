"use client";
import Link from "next/link";
import { useState } from "react";

type Parralelogram = {
	num: number;
	label: string;
	description: string;
	link: string;
};

export default function Parallelogram(props: Parralelogram) {
	const [bgColor, setBgColor] = useState("bg-black bg-opacity-50");
	const [pTextColor, setPTextColor] = useState("text-white");
	const [headerBgColor, setHeaderBgColor] = useState("bg-brand-gray-dark");
	const [arrowColor, setArrowCollor] = useState("white");

	const toggleColor = () => {
		setBgColor(
			bgColor === "bg-black bg-opacity-50"
				? "bg-white"
				: "bg-black bg-opacity-50"
		);
		setPTextColor(
			pTextColor === "text-white" ? "text-brand-purple" : "text-white"
		);
		setHeaderBgColor(
			headerBgColor === "bg-brand-gray-dark"
				? "bg-brand-green"
				: "bg-brand-gray-dark"
		);
		setArrowCollor(arrowColor === "white" ? "#1F1441" : "white");
	};

	return (
		<div
			onMouseEnter={toggleColor}
			onMouseLeave={toggleColor}
			className={`sm:hover:scale-110 sm:hover:translate-x-2 sm:hover:translate-y-2 w-[16rem] h-96 ${bgColor} -skew-x-12 ml-6 flex flex-col items-center`}
		>
			<h4
				className={`font-vt323 text-center rounded-[0.2rem] ${headerBgColor} relative top-8 left-20 w-2/3 text-3xl`}
			>
				STEP {props.num}
			</h4>
			<p
				className={`h-1/3 my-11 lg:my-16 xl:my-20 px-5 ${pTextColor} text-center font-robotoCondensed text-xl font-light`}
			>
				<span className="font-bold">{props.label}</span> {props.description}
			</p>
			<div className="absolute top-[95%] xl:top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-3/4">
				<button className="">
					<Link href={props.link} passHref={true} target="_blank">
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14 6L12.57 7.393L18.15 13H6V15H18.15L12.57 20.573L14 22L22 14L14 6Z"
								fill={`${arrowColor}`}
							/>
							<path
								d="M14 28C11.2311 28 8.52431 27.1789 6.22202 25.6406C3.91973 24.1022 2.12532 21.9157 1.06569 19.3576C0.00606596 16.7994 -0.271181 13.9845 0.269012 11.2687C0.809205 8.55301 2.14258 6.05845 4.10051 4.10051C6.05845 2.14258 8.55301 0.809205 11.2687 0.269012C13.9845 -0.271181 16.7994 0.00606596 19.3576 1.06569C21.9157 2.12532 24.1022 3.91973 25.6406 6.22202C27.1789 8.52431 28 11.2311 28 14C27.9958 17.7117 26.5194 21.2702 23.8948 23.8948C21.2702 26.5194 17.7117 27.9958 14 28ZM14 2.00001C11.6266 2.00001 9.30655 2.70379 7.33316 4.02237C5.35977 5.34095 3.8217 7.21509 2.91345 9.40781C2.0052 11.6005 1.76756 14.0133 2.23058 16.3411C2.69361 18.6689 3.83649 20.8071 5.51472 22.4853C7.19296 24.1635 9.33115 25.3064 11.6589 25.7694C13.9867 26.2325 16.3995 25.9948 18.5922 25.0866C20.7849 24.1783 22.6591 22.6402 23.9776 20.6668C25.2962 18.6935 26 16.3734 26 14C25.9963 10.8185 24.7308 7.76845 22.4812 5.51882C20.2316 3.26918 17.1815 2.00371 14 2.00001Z"
								fill={`${arrowColor}`}
							/>
						</svg>
					</Link>
				</button>
			</div>
		</div>
	);
}
