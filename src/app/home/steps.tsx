import Parallelogram from '../components/ui/parallelogram';
import Image from 'next/image';

export default function Steps() {
	return (
		<section className="bg-brand-purple-dark pt-20 overflow-hidden">
			<div className="relative flex justify-center">
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
			<div className="bg-brand-gray-light w-full mt-20 flex justify-between">
				<Image
					src="/steps-all-models.png"
					alt="All CYOBot models"
					quality={100}
					// fill
					width={700}
					height={300}
					sizes="(max-width: 1440px) 100vw"
					style={{
						objectFit: 'contain',
						// maxHeight: '345px',
						// maxWidth: '757px',
					}}
					className="relative -top-32"
				/>
			</div>
		</section>
	);
}
