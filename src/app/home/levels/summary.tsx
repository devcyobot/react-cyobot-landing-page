type SummaryProps = {
	text: string;
};

export default function Summary({ text }: SummaryProps) {
	return (
		<>
			<h4 className="pt-12">Level Summary</h4>
			<p>{text}</p>
		</>
	);
}
