import { FC } from 'react';
import Image from 'next/image';

const ScheduleCall: FC = () => {
	return (
		<section className="relative bg-brand-gray-light h-[380px] w-full flex justify-between">
			<div className="grid grid-cols-2 w-full justify-items-center items-center">
				<div className="flex">
					<Image
						src="/steps-all-models.png"
						alt="All CYOBot models"
						quality={100}
						width={800}
						height={400}
						sizes="(max-width: 1440px) 100vw"
						style={{
							objectFit: 'contain',
						}}
					/>
				</div>
				<div className="text-center w-2/3 xl:w-1/2">
					<p className="font-roboto font-medium text-lg sm:text-xl lg:text-2xl">
						Still have question about how our robotic kit would be a good fit
						for you?
					</p>
					<button className="pt-8">
						<p className="font-vt323 font-medium text-xl sm:text-2xl bg-brand-green px-2 py-1 rounded-md text-brand-purple-dark">
							Book A Call
						</p>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ScheduleCall;
