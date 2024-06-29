import React from 'react';
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
	// Ensure there are at least 20 logos
	const combinedLogos = [...data].slice(0, 20);
	const heightWidthRatio = 1; // height / width (calculated based on Figma hexagon width and height)

	return (
		<div className="h-[65%] flex flex-col items-center">
			<div className="flex items-center">
				{combinedLogos.slice(0, 7).map((logo, index) => (
					<HexagonBadge
						key={`row-1-${index}`}
						roles={logo.text}
						width={190}
						height={190 * heightWidthRatio}
						color="#3E2486"
						radius={3}
						orientation="pointy"
						available={logo.available}
					/>
				))}
			</div>
			<div className="relative bottom-[1rem] flex items-center">
				{combinedLogos.slice(7, 13).map((logo, index) => (
					<HexagonBadge
						key={`row-2-${index}`}
						roles={logo.text}
						width={190}
						height={190 * heightWidthRatio}
						color="#3E2486"
						radius={3}
						orientation="pointy"
						available={logo.available}
					/>
				))}
			</div>
			<div className="relative bottom-[2rem] flex items-center">
				{combinedLogos.slice(13, 20).map((logo, index) => (
					<HexagonBadge
						key={`row-3-${index}`}
						roles={logo.text}
						width={190}
						height={190 * heightWidthRatio}
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
