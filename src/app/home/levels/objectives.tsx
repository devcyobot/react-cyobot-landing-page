import { useDifficultyContext } from '../../context/DifficultyContext';

type SummaryProps = {
	text: string;
};

export default function Summary({ text }: SummaryProps) {
	const { currentDifficulty } = useDifficultyContext();

	return (
		<div>
			<h4
				className="mt-5 sm:mt-14 mb-3 text-3xl md:text-3xl lg:text-4xl font-vt323"
				style={{ color: currentDifficulty.color }}
			>
				OBJECTIVES
			</h4>
			<p className="font-roboto font-medium text-lg md:text-xl lg:text-2xl mt-5">
				{text}
			</p>
		</div>
	);
}
