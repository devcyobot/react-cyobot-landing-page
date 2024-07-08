'use client';
import Image from 'next/image';
import { useState } from 'react';
import { envData } from '../data/envData';

export default function Environments() {
	const [activeScreen, setActiveScreen] = useState<number>(-1);
	const handleOnClick = (index: number) => {
		setActiveScreen(index);
	};

	return (
		<section className="h-[45rem] md:h-[55rem] lg:h-[60rem] bg-brand-dark flex flex-col justify-evenly items-center">
			<div className="flex flex-col justify-between h-[12%]">
				<h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
					CYOBOT ENVIRONMENTS
				</h2>
				<p className="font-roboto text-white px-2 sm:text-lg lg:text-2xl text-center">
					Interactive & intuitive to get you start small, grow fast, and gain
					tangible results
				</p>
			</div>
			<div className="h-4/5 sm:h-auto grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] items-center w-full mx-auto max-w-[1440px]">
				<ul className="h-full flex flex-col items-center justify-evenly">
					<li>
						<button
							type="button"
							onClick={() => handleOnClick(0)}
							className="focus:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; DASHBOARD &gt;&gt;
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => handleOnClick(1)}
							className="focus:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; GITHUB &gt;&gt;
						</button>
					</li>
					<span className="w-2/3 font-robotoCondensed italic text-sm sm:text-base lg:text-xl xl:text-2xl text-white text-center">
						CHOOSE 1 BELOW FOR YOUR HARDWARE CUSTOMIZATION
					</span>
					<li>
						<button
							type="button"
							onClick={() => handleOnClick(2)}
							className="focus:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; PYTHON PORTAL &gt;&gt;
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => handleOnClick(3)}
							className="focus:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; BLOCK PORTAL &gt;&gt;
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => handleOnClick(4)}
							className="focus:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; C/C++ PORTAL &gt;&gt;
						</button>
					</li>
				</ul>
				<div className="justify-self-center dashboard-border relative h-[18rem] sm:h-[27rem] lg:h-[32rem] xl:h-[42rem] w-[20rem] sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] flex items-center">
					<div className="bg-brand-green bg-opacity-50 h-[15rem] sm:h-[23rem] lg:h-[28rem] xl:h-[36rem] w-full flex flex-col items-center justify-center">
						{activeScreen >= 0 ? (
							<div className="relative h-[90%] sm:h-[85%] w-4/5 flex flex-col justify-center">
								<figure className="relative h-2/3">
									<Image
										src={envData[activeScreen].src}
										alt="CYOBot Portals"
										quality={100}
										fill
										sizes="100vw"
										style={{
											objectFit: 'contain',
											maxHeight: '25rem',
											maxWidth: '50rem',
										}}
									/>
								</figure>
								<p className="h-auto font-robotoCondensed text-sm sm:text-base lg:text-xl text-white mt-2">
									{envData[activeScreen].caption}
								</p>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
