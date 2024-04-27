type SummaryProps = {
	text: string;
};

export default function Summary({ text }: SummaryProps) {
	return (
		<div className="mx-[8.25rem]">
			<h4 className="mt-20 mb-5">Level Summary</h4>
			<p>{text}</p>
		</div>
	);
}
