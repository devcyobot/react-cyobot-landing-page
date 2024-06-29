import { FC } from 'react';
import Image from 'next/image';

const ScheduleCall: FC = () => {
	return (
		<section className="relative bg-brand-gray-light h-1/2 w-full mt-20 flex justify-between">
			<Image
				src="/steps-all-models.png"
				alt="All CYOBot models"
				quality={100}
				fill
				sizes="(max-width: 1440px) 100vw"
				style={{
					objectFit: 'contain',
					maxHeight: '345px',
					maxWidth: '757px',
				}}
			/>
			<p className="font-roboto font-medium text-2xl">
				Still have question about how our robotic kit would be a good fit for
				you?
			</p>
		</section>
	);
};

export default ScheduleCall;
