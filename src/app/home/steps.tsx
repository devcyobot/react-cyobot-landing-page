import Parallelogram from '../components/ui/parallelogram';
import Image from 'next/image';
import { stepsData } from '../data/stepsData';

export default function Steps() {
	return (
		<section className="bg-brand-purple-dark py-20 overflow-hidden">
			<div className="relative flex justify-center">
				{/* <Parallelogram num={1} text="Choose your quest and environment" />
				<Parallelogram
					num={2}
					text="Unlock roles while waiting for your companion robot to arrive"
				/>
				<Parallelogram
					num={3}
					text="Accept your fate and go through the quest along with the robot"
				/>
				<Parallelogram num={4} text="Build your github profile in less than " />
				<Parallelogram num={5} text="Build your github profile in less than " /> */}
				{stepsData.map((item, index) => (
					<Parallelogram
						key={`step-parallelogram-${index}`}
						num={index + 1}
						label={item.label}
						description={item.description}
						link={item.link}
					/>
				))}
			</div>
		</section>
	);
}
