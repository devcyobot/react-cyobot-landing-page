import { FC } from 'react';
import Image from 'next/image';

const ScheduleCall: FC = () => {
	return (
		<section className="relative bg-brand-gray-light h-[380px] w-full flex justify-between">
			<div className="grid grid-cols-4 w-full">
				<div className="col-span-2 flex justify-center">
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
				<div className="col-span-2 px-40 text-center pt-28">
					<p className="font-roboto font-medium text-2xl">
						Still have question about how our robotic kit would be a good fit for you?
					</p>
					<button className='pt-8'>
						<p className="font-vt323 font-medium text-2xl bg-brand-green px-2 py-1 rounded-md text-brand-purple-dark">
							Book A Call
						</p>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ScheduleCall;
