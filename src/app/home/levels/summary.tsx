type SummaryProps = {
	text: string;
};

export default function Summary({ text }: SummaryProps) {
	return (
		<>
			<h4 className="pb-3 pt-12">Level Summary</h4>
			<p>{text}</p>
		</>
	);
}
