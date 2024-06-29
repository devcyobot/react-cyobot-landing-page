import { useDifficultyContext } from '../../context/DifficultyContext';

type SummaryProps = {
	text: string;
};

export default function Summary({ text }: SummaryProps) {
	const { currentDifficulty } = useDifficultyContext();

	return (
		<div>
			<h4
				className="mt-14 mb-3 text-4xl font-vt323"
				style={{ color: currentDifficulty.color }}
			>
				OBJECTIVES
			</h4>
			<p className="font-roboto fint-medium text-2xl mt-5">{text}</p>
		</div>
	);
}
