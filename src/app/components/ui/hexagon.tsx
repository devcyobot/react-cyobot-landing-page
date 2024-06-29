// import styles from './hexagon.module.css';

// interface HexagonProps {
// 	text: string;
// 	// available: boolean;
// }

// export default function Hexagon({ text }: HexagonProps) {
// 	// const backgroundColorClass = available
// 	// 	? styles.greenBackground
// 	// 	: styles.purpleBackground;
// 	return (
// 		<div className={styles.hex}>
// 			<p className={styles.hexText}>{text}</p>
// 		</div>
// 	);
// }

// import { FC } from 'react';
// type HexagonBadgeProps = {
// 	src?: string;
// 	alt?: string;
// 	colorFill: string;
// 	colorStroke: string;
// };

// const HexagonBadge: FC<HexagonBadgeProps> = ({
// 	src,
// 	alt,
// 	colorFill,
// 	colorStroke,
// }) => {
// 	const numVertices = 6;
// 	const angle = (2 * Math.PI) / numVertices;
// 	const radius = 60; // Adjusted radius for smaller size
// 	const widthScale = (Math.sqrt(3) / 2) * 1;
// 	const heightScale = widthScale * 0.8;

// 	const points = Array.from({ length: numVertices }, (_, i) => {
// 		const x = Math.cos(angle * i - Math.PI / 2) * radius * widthScale;
// 		const y = Math.sin(angle * i - Math.PI / 2) * radius * heightScale;
// 		return `${x},${y}`;
// 	}).join(' ');

// 	const viewBoxWidth = 4 * radius * widthScale;
// 	const viewBoxHeight = 4.3 * radius * heightScale;

// 	// Adjusted image size to be smaller than the hexagon
// 	const imageScale = 0.48;
// 	const imageWidth = viewBoxWidth * imageScale;
// 	const imageHeight = viewBoxHeight * imageScale;

// 	return (
// 		<div
// 			className="w-full h-full overflow-hidden relative"
// 			style={{ width: viewBoxWidth, height: viewBoxHeight }}
// 		>
// 			<svg
// 				width="100%"
// 				height="100%"
// 				viewBox={`-${viewBoxWidth / 4} -${viewBoxHeight / 4} ${
// 					viewBoxWidth / 2
// 				} ${viewBoxHeight / 2}`}
// 				className="absolute top-0 left-0 w-full h-full rounded"
// 			>
// 				{src ? (
// 					<>
// 						<defs>
// 							<clipPath id="hexagon-clip">
// 								<polygon points={points} />
// 							</clipPath>
// 						</defs>
// 						<image
// 							href={src}
// 							x={`-${viewBoxWidth / 4}`}
// 							y={`-${viewBoxHeight / 4}`}
// 							width={imageWidth}
// 							height={imageHeight}
// 							preserveAspectRatio="xMidYMid slice"
// 							clipPath="url(#hexagon-clip)"
// 						/>
// 						<polygon
// 							points={points}
// 							fill="none"
// 							stroke="#1ad69c"
// 							strokeDasharray="6.7"
// 							strokeWidth="1.5"
// 							strokeLinecap="round"
// 						/>
// 					</>
// 				) : (
// 					<polygon
// 						points={points}
// 						fill={colorFill}
// 						stroke={colorStroke}
// 						strokeDasharray="100"
// 						strokeWidth="1"
// 						strokeLinecap="round"
// 					/>
// 				)}
// 			</svg>
// 		</div>
// 	);
// };

// export default HexagonBadge;

// Hexagon Generator used in this code: https://codepen.io/wvr/pen/WrNgJp

'use client';
import { FC, useEffect, useRef } from 'react';
import { Path, Vector } from './VectorPathType';

type HexagonBadgeProps = {
	roles: string;
	width: number;
	height: number;
	color: string;
	radius: number;
	orientation: 'pointy' | 'flat';
	available: boolean;
};

const HexagonBadge: FC<HexagonBadgeProps> = ({
	roles,
	width,
	height,
	color,
	radius = 0,
	orientation = 'pointy',
	available = false,
}) => {
	// Lengths are approximate to adjust the stroke-dasharray for the corners
	const edgeLength = 32; // Approximate length of each edge segment of the hexagon
	const cornerLength = 19; // Length of the corner strokes
	const gapLength = edgeLength - cornerLength; // Length of the gaps between strokes

	// Caculate the path data points
	function getPath(r: number): string {
		let a, b, c, d, e, f;

		if (orientation === 'pointy') {
			a = new Vector(width / 2, 0);
			b = new Vector(width, height / 4);
			c = new Vector(width, (height * 3) / 4);
			d = new Vector(width / 2, height);
			e = new Vector(0, (height * 3) / 4);
			f = new Vector(0, height / 4);
		} else {
			a = new Vector(0, height / 2);
			b = new Vector(width / 4, 0);
			c = new Vector((width * 3) / 4, 0);
			d = new Vector(width, height / 2);
			e = new Vector((width * 3) / 4, height);
			f = new Vector(width / 4, height);
		}

		const right = Vector.fromAngle(b.subtract(a).angle(), r);
		const left = Vector.fromAngle(f.subtract(a).angle(), r);
		const level =
			orientation === 'pointy' ? new Vector(0, r) : new Vector(r, 0);

		return new Path([
			Path.M(a.add(left)),
			Path.Q(a, a.add(right)),
			Path.L(b.subtract(right)),
			Path.Q(b, b.add(level)),
			Path.L(c.subtract(level)),
			Path.Q(c, c.add(left)),
			Path.L(d.subtract(left)),
			Path.Q(d, d.subtract(right)),
			Path.L(e.add(right)),
			Path.Q(e, e.subtract(level)),
			Path.L(f.add(level)),
			Path.Q(f, f.subtract(left)),
			Path.Z(),
		]).toString();
	}

	const textRef = useRef<SVGTextElement | null>(null);

	let startY = 0;
	const words = roles.split(' ');
	if (words.length > 2) startY = 65;
	else if (words.length > 1) startY = 80;
	else startY = 100;

	useEffect(() => {
		const svgText = textRef.current;
		if (!svgText) return;

		svgText.innerHTML = ''; // Clear existing content

		words.forEach((word, index) => {
			const tspan = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'tspan'
			);
			tspan.textContent = word;
			tspan.setAttribute('x', '50%');
			tspan.setAttribute('dy', index === 0 ? '0' : '1.1em'); // Line height

			svgText.appendChild(tspan);
		});
	}, [roles, words]);

	return (
		<div>
			<svg
				width={Math.ceil(width)}
				height={Math.ceil((height * Math.sqrt(3)) / 2)}
				viewBox={`0 0 ${width} ${height}`}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					fill={available ? '#1ad69c' : color}
					fillOpacity={roles ? '100%' : '50%'}
					d={getPath(radius)}
				></path>
				<text
					ref={textRef}
					y={`${startY}`}
					textAnchor="middle"
					dominantBaseline="middle"
					className="font-vt323 text-4xl fill-white"
				></text>
			</svg>
		</div>
	);
};

export default HexagonBadge;
