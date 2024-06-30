'use client';
import React, { useEffect, useState } from 'react';
import HexagonBadge from './hexagon';

type Logo = {
	text: string;
	available: boolean;
};

type HexagonBadgeMatrixProps = {
	data?: Logo[];
};

const HexagonBadgeMatrix: React.FC<HexagonBadgeMatrixProps> = ({
	data = [],
}) => {
	const [dimensions, setDimensions] = useState<number>(0);
	// Ensure there are at least 20 logos
	const combinedLogos = [...data].slice(0, 20);
	const heightWidthRatio = 1; // height / width (calculated based on Figma hexagon width and height)

	useEffect(() => {
		// Trigger the transition effect when the component mounts
		const updateDimensions = () => {
			// 2xl
			if (window.matchMedia('(min-width: 1536px)').matches) {
				setDimensions(190);
			}
			// xl
			else if (window.matchMedia('(min-width: 1280px)').matches) {
				setDimensions(190);
			}
			// lg
			else if (window.matchMedia('(min-width: 1024px)').matches) {
				setDimensions(140);
			}
			// md
			else if (window.matchMedia('(min-width: 768px)').matches) {
				setDimensions(110);
			}
			// sm
			else if (window.matchMedia('(min-width: 640px)').matches) {
				setDimensions(90);
			}
			// mobile
			else {
				setDimensions(45); // Default dimensions for mobile
			}
		};

		updateDimensions(); // Set initial dimensions on mount
		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	return (
		<div className="w-full h-1/2 sm:h-[65%] flex flex-col items-center">
			<div className="flex items-center">
				{combinedLogos.slice(0, 7).map((logo, index) => (
					<HexagonBadge
						key={`row-1-${index}`}
						roles={logo.text}
						width={dimensions}
						height={dimensions * heightWidthRatio}
						color="#3E2486"
						radius={3}
						orientation="pointy"
						available={logo.available}
					/>
				))}
			</div>
			<div className="relative bottom-[0.25rem] sm:bottom-[0.3rem] md:bottom-[0.7rem] xl:bottom-[1rem] flex items-center">
				{combinedLogos.slice(7, 13).map((logo, index) => (
					<HexagonBadge
						key={`row-2-${index}`}
						roles={logo.text}
						width={dimensions}
						height={dimensions * heightWidthRatio}
						color="#3E2486"
						radius={3}
						orientation="pointy"
						available={logo.available}
					/>
				))}
			</div>
			<div className="relative bottom-[0.5rem] sm:bottom-[0.6rem] md:bottom-[1.4rem] xl:bottom-[2rem] flex items-center">
				{combinedLogos.slice(13, 20).map((logo, index) => (
					<HexagonBadge
						key={`row-3-${index}`}
						roles={logo.text}
						width={dimensions}
						height={dimensions * heightWidthRatio}
						color="#3E2486"
						radius={3}
						orientation="pointy"
						available={logo.available}
					/>
				))}
			</div>
		</div>
	);
};

export default HexagonBadgeMatrix;
