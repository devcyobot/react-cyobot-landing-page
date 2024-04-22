import Parallelogram from '../components/ui/parallelogram';
import Image from 'next/image';

export default function Steps() {
	return (
		<section className="bg-brand-purple-dark pt-20">
			<div className="flex justify-center">
				<Parallelogram num={1} text="Choose your quest and environment" />
				<Parallelogram
					num={2}
					text="Unlock roles while waiting for your companion robot to arrive"
				/>
				<Parallelogram
					num={3}
					text="Accept your fate and go through the quest along with the robot"
				/>
				<Parallelogram num={4} text="Build your github profile in less than " />
			</div>
			<div className="bg-brand-gray-light w-full mt-20 flex justify-between items-center">
				<Image
					src="/steps-all-models.png"
					alt="All CYOBot models"
					width={500}
					height={500}
					className="relative -top-24"
				/>
				<button type="button" className="bg-brand-green rounded-md">
					A button
				</button>
			</div>
		</section>
	);
}
