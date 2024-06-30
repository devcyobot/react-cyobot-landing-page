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
		<div className="h-[85rem] sm:h-[45rem] md:h-[40rem] lg:h-[60rem]">
			<h4
				className="mt-14 mb-3 text-4xl font-vt323"
				style={{ color: currentDifficulty.color }}
			>
				PROJECTS
			</h4>
			<div
				className={`mx-auto my-10 max-w-[1440px] w-full sm:w-[75%] md:w-full h-auto max-h-[27rem]
					grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-${rowNum} place-items-center justify-items-center 
					gap-y-10 sm:gap-5 md:gap-10 lg:gap-5 xl:gap-y-16 xl:gap-x-0`}
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
		</div>
	);
}
