type BarProps = {
	color: string;
	name: string;
	amount: string;
};

export default function Bar({ color, name, amount }: BarProps) {
	let bg = '';
	if (color === 'yellow') bg = '#f3c449';
	else if (color === 'green') bg = '#1ad69c';
	else if (color === 'red') bg = '#e00303';
	else bg = '#3e2486';

	return (
		<>
			<div className="mt-8 flex flex-col">
				<div className="absolute w-[45%] h-7 bg-gray-300 rounded-lg"></div>
				<div
					className={`relative h-7 rounded-l-lg rounded-br-3xl`}
					style={{
						width: amount,
						backgroundColor: bg,
					}}
				></div>
			</div>
			<p className="vt323-regular text-3xl">{name}</p>
		</>
	);
}
