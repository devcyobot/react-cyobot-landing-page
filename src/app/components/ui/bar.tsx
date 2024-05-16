type BarProps = {
	color: string; // The color of the changing part
	name: string; // Title of the bar
	amount: string; // The amount of the changing part, should be in percentage (50%, 75%, etc.)
};

export default function Bar({ color, name, amount }: BarProps) {
	// Choose which color for this bar
	let bg = '';
	if (color === 'yellow') bg = '#f3c449';
	else if (color === 'green') bg = '#1ad69c';
	else if (color === 'red') bg = '#e00303';
	else bg = '#3e2486';

	return (
		<div>
			{/* The grey part of the bar */}
			<div className="w-4/5 h-7 bg-gray-300 rounded-lg">
				{/* The colored part of the bar */}
				<div
					className={`relative h-7 rounded-l-lg rounded-br-3xl`}
					style={{
						width: amount,
						backgroundColor: bg,
					}}
				></div>
			</div>
			<p className="vt323-regular text-3xl mb-5">{name}</p>
		</div>
	);
}
