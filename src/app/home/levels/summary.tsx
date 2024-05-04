type SummaryProps = {
	text: string;
};

export default function Summary({ text }: SummaryProps) {
	return (
		<div>
			<h4 className="mt-16 mb-3 text-3xl">Level Summary</h4>
			<p className="text-2xl">{text}</p>
		</div>
	);
}
