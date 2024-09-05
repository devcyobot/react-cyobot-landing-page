import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const ScheduleCall: FC = () => {
	return (
		<section className="relative bg-brand-gray-light py-10 w-full flex justify-between">
			<div className="mx-auto max-w-[1536px] grid sm:grid-cols-2 w-full justify-items-center items-center">
				<div className="flex">
					<Image
						src="/steps-all-models.png"
						alt="All CYOBot models"
						quality={80}
						width={800}
						height={400}
						sizes="(max-width: 1440px) 100vw"
						style={{
							objectFit: "contain",
						}}
					/>
				</div>
				<div className="text-center w-2/3 xl:w-2/3 flex flex-col items-center gap-y-5">
					<p className="font-roboto font-medium text-lg sm:text-xl lg:text-2xl">
						Still have question about how our robotic kit would be a good fit
						for you?
					</p>
					<Link
						href="https://calendly.com/cyobot/meet"
						passHref={true}
						target="_blank"
						className="font-vt323 font-medium text-xl sm:text-2xl bg-brand-green px-3 py-2 w-fit rounded-md text-brand-purple-dark"
					>
						Book A Call
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ScheduleCall;
