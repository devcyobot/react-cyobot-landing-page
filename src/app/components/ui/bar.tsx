type BarProps = {
	color: string;
	name: string;
	amount: string;
};

export default function Bar({ color, name, amount }: BarProps) {
	return (
		<>
			<div className="mt-8 flex flex-col items-start">
				<div className="absolute w-[45%] h-7 bg-gray-300 rounded-lg"></div>
				<div
					className={`relative h-7 w-${amount} bg-brand-${color} rounded-l-lg rounded-br-3xl`}
				></div>
			</div>
			<p className="vt323-regular text-3xl">{name}</p>
		</>
	);
}
