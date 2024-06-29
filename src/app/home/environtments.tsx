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
		<section className="h-[60rem] bg-brand-dark flex flex-col justify-evenly items-center">
			<div className="flex flex-col justify-between h-[12%]">
				<h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center">
					CYOBOT ENVIRONMENTS
				</h2>
				<p className="font-roboto text-white text-2xl text-center">
					Interactive & intuitive to get you start small, grow fast, and gain
					tangible results
				</p>
			</div>
			<div className="grid grid-cols-[1fr_1.5fr] items-center w-full mx-auto max-w-[1440px]">
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
					<span className="w-2/3 font-robotoCondensed italic text-2xl text-white text-center">
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
				<div className="dashboard-border relative h-[42rem] w-[50rem] flex items-center">
					<div className="bg-brand-green bg-opacity-50 h-[36rem] w-[55rem] flex flex-col items-center justify-center">
						{activeScreen >= 0 ? (
							<div className="relative h-[85%] w-4/5 flex flex-col justify-center">
								<figure className="relative h-full">
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
								<p className="font-robotoCondensed text-xl text-white mt-2">
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
