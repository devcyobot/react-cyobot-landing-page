import Card from '../../components/ui/card';

type RewardsProps = {
	data: Reward[];
};

type Reward = {
	id: number;
	color: string;
	image: {
		src: string;
		alt: string;
	};
	name: string;
	job: string;
};

export default function Rewards({ data }: RewardsProps) {
	return (
		<>
			<h4 className="pb-3 pt-12">Rewards</h4>
			<div className="flex flex-wrap justify-center">
				{data.map((d) => {
					return (
						<Card
							key={d.id}
							image={{ src: d.image.src, alt: d.image.alt }}
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
