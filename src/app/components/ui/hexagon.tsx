"use client";
import { FC, useEffect, useRef } from "react";
import { Path, Vector } from "./VectorPathType";

type HexagonBadgeProps = {
	roles: string;
	width: number;
	height: number;
	color: string;
	radius: number;
	orientation: "pointy" | "flat";
	available: boolean;
};

const HexagonBadge: FC<HexagonBadgeProps> = ({
	roles,
	width,
	height,
	color,
	radius = 0,
	orientation = "pointy",
	available = false,
}) => {
	// Caculate the path data points
	function getPath(r: number): string {
		let a, b, c, d, e, f;

		if (orientation === "pointy") {
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
			orientation === "pointy" ? new Vector(0, r) : new Vector(r, 0);

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

	let startY = "0%";
	const words = roles.split(" ");
	if (words.length > 2) startY = "35%";
	else if (words.length > 1) startY = "45%";
	else startY = "55%";

	useEffect(() => {
		const svgText = textRef.current;
		if (!svgText) return;

		svgText.innerHTML = ""; // Clear existing content

		words.forEach((word, index) => {
			const tspan = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"tspan"
			);
			tspan.textContent = word;
			tspan.setAttribute("x", "50%");
			tspan.setAttribute("dy", index === 0 ? "0" : "1.1em"); // Line height

			svgText.appendChild(tspan);
		});
	}, [words]);

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
					fill={available ? "#1ad69c" : color}
					fillOpacity={roles ? "100%" : "50%"}
					d={getPath(radius)}
				></path>
				<text
					ref={textRef}
					x="50%"
					y={startY}
					textAnchor="middle"
					dominantBaseline="middle"
					className="font-vt323 text-[0.6rem] sm:text-lg md:text-xl lg:text-3xl xl:text-4xl fill-white"
				></text>
				;
			</svg>
		</div>
	);
};

export default HexagonBadge;
