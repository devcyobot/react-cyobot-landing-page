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
		<div className="mx-[8.25rem]">
			<h4 className="mt-20 mb-5">Rewards</h4>
			<div className="flex flex-wrap justify-center">
				{/* {data.map((d) => {
					return (
						<Card
							key={d.id}
							image={{ src: d.image.src, alt: d.image.alt }}
							color={d.color}
							title={d.name}
							text={d.job}
						/>
					);
				})} */}
				WILL BE ADDED LATER
			</div>
		</div>
	);
}
