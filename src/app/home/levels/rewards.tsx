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
	const { currentDifficulty } = useDifficultyContext();

	return (
		<div className="flex flex-col justify-evenly items-center">
			<h4
				className="mt-14 text-4xl font-vt323 self-start"
				style={{ color: currentDifficulty.color }}
			>
				PROJECTS
			</h4>
			<div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 xl:gap-24">
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
		</div>
	);
}
