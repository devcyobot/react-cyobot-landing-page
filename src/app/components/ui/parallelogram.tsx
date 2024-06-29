'use client';
import Link from 'next/link';
import { useState } from 'react';

type Parralelogram = {
	num: number;
	label: string;
	description: string;
	link: string;
};

export default function Parallelogram(props: Parralelogram) {
	const [bgColor, setBgColor] = useState('bg-black bg-opacity-50');
	const [pTextColor, setPTextColor] = useState('text-white');
	const [headerBgColor, setHeaderBgColor] = useState('bg-brand-gray-dark');

	const toggleColor = () => {
		setBgColor(
			bgColor === 'bg-black bg-opacity-50'
				? 'bg-white'
				: 'bg-black bg-opacity-50'
		);
		setPTextColor(
			pTextColor === 'text-white' ? 'text-brand-purple' : 'text-white'
		);
		setHeaderBgColor(
			headerBgColor === 'bg-brand-gray-dark'
				? 'bg-brand-green'
				: 'bg-brand-gray-dark'
		);
	};

	return (
		<div
			onMouseEnter={toggleColor}
			onMouseLeave={toggleColor}
			className={`hover:scale-110 hover:translate-x-2 hover:translate-y-2 w-[16rem] h-96 ${bgColor} -skew-x-12 ml-6`}
		>
			{/* <h4
				className={`font-vt323 text-center rounded-[0.2rem] ${headerBgColor} relative top-8 left-24 w-2/3 text-lg sm:text-xl md:text-2xl lg:text-3xl`}
			>
				STEP {props.num}
			</h4> */}
			<p
				className={`h-1/3 my-28 px-5 ${pTextColor} text-center font-robotoCondensed text-sm sm:text-base md:text-lg lg:text-xl font-light`}
			>
				<span className="font-bold">{props.label}</span> {props.description}
			</p>
			<button className="bg-white">
				<Link href={props.link} passHref={true} target="_blank">
					arrow
				</Link>
			</button>
		</div>
	);
}
