import Card from '../../components/ui/card';
import { useDifficultyContext } from '../../context/DifficultyContext';

type RewardsProps = {
	data: Reward[];
};

type Reward = {
	id: number;
	color: string;
	image: {
		src: string;
		staticSrc: string;
		alt: string;
	};
	name: string;
	job: string;
};

export default function Rewards({ data }: RewardsProps) {
	let rowNum = 0;
	if (data.length === 3) rowNum = 1;
	else rowNum = 2;

	const { currentDifficulty } = useDifficultyContext();

	return (
		<>
			<h4
				className="mt-14 mb-3 text-4xl font-vt323"
				style={{ color: currentDifficulty.color }}
			>
				PROJECTS
			</h4>
			<div
				className={`mt-10 max-w-[1440px] w-full h-4/5 grid grid-cols-3 grid-rows-${rowNum} place-items-center gap-y-16 mb-20`}
			>
				{data.map((d) => {
					return (
						<Card
							key={d.id}
							image={{
								src: d.image.src,
								staticSrc: d.image.staticSrc,
								alt: d.image.alt,
							}}
							color={d.color}
							title={d.name}
							text={d.job}
						/>
					);
				})}
			</div>
		</>
	);
}
