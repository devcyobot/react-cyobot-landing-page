type BarProps = {
	color: string; // The color of the changing part
	name: string; // Title of the bar
	amount: string; // The amount of the changing part, should be in percentage (50%, 75%, etc.)
};

export default function Bar({ color, name, amount }: BarProps) {
	// Choose which color for this bar
	let bg = "";
	if (color === "yellow") bg = "#f3c449";
	else if (color === "green") bg = "#1ad69c";
	else if (color === "red") bg = "#e00303";
	else bg = "#3e2486";

	return (
		<div>
			{/* The grey part of the bar */}
			<div className="w-full h-7 bg-gray-300 rounded-xl max-w-3xl">
				{/* The colored part of the bar */}
				<div
					className={`relative h-7 rounded-l-lg rounded-br-3xl`}
					style={{
						width: amount,
						backgroundColor: bg,
					}}
				></div>
			</div>
			<p className="font-vt323 text-2xl mt-2 mb-10">{name}</p>
		</div>
	);
}
