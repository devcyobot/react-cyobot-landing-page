'use client';
import { useState } from 'react';

type Parralelogram = {
	num: number;
	text: string;
};

export default function Parallelogram({ num, text }: Parralelogram) {
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
			className={`w-60 h-96 ${bgColor} -skew-x-12 ml-6`}
		>
			<h4
				className={`vt323-regular text-center rounded-br-3xl ${headerBgColor} rounded-tl-lg relative top-8 right-5 w-2/3`}
			>
				<span className="text-white">[</span>STEP {num}
				<span className="text-white">]</span>
			</h4>
			<p className={`my-28 ${pTextColor} text-center`}>{text}</p>
		</div>
	);
}
