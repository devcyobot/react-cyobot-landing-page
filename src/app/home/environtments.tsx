"use client";
import Image from "next/image";
import { useState } from "react";
import { envData } from "../data/envData";

export default function Environments() {
	const [activeScreen, setActiveScreen] = useState<number>(-1);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const handleLoad = () => {
		setIsLoading(false);
	};

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
							className="hover:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; DASHBOARD &gt;&gt;
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => handleOnClick(1)}
							className="hover:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
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
							className="hover:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; PYTHON PORTAL &gt;&gt;
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => handleOnClick(3)}
							className="hover:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; BLOCK PORTAL &gt;&gt;
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => handleOnClick(4)}
							className="hover:text-brand-green text-white font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4"
						>
							&lt;&lt; C/C++ PORTAL &gt;&gt;
						</button>
					</li>
				</ul>
				<div className="justify-self-center dashboard-border relative h-[18rem] sm:h-[27rem] lg:h-[32rem] xl:h-[42rem] w-[20rem] sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] flex items-center">
					<div className="bg-brand-green bg-opacity-50 h-[15rem] sm:h-[23rem] lg:h-[28rem] xl:h-[36rem] w-full flex flex-col items-center justify-center">
						{activeScreen >= 0 ? (
							<div className="relative h-[90%] sm:h-[85%] w-4/5 flex flex-col justify-center">
								<figure className="relative h-full w-full flex justify-center items-center">
									{isLoading && (
										<svg
											width="34"
											height="34"
											viewBox="0 0 50 50"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
										>
											<path
												fill="#F8F8F8"
												d="M43.935,25.145c0-10.318-8.362-18.68-18.68-18.68c-10.317,0-18.68,8.362-18.68,18.68h4.068
							c0-8.073,6.539-14.612,14.612-14.612c8.073,0,14.612,6.539,14.612,14.612H43.935z"
											>
												<animateTransform
													attributeType="xml"
													attributeName="transform"
													type="rotate"
													from="0 25 25"
													to="360 25 25"
													dur="0.6s"
													repeatCount="indefinite"
												/>
											</path>
										</svg>
									)}
									<Image
										src={envData[activeScreen].src}
										alt="CYOBot Portals"
										quality={100}
										fill
										sizes="100vw"
										className="w-full h-full"
										style={{
											objectFit: "contain",
											maxHeight: "25rem",
											maxWidth: "50rem",
										}}
										onLoadingComplete={handleLoad}
									/>
								</figure>
								<p className="h-auto font-robotoCondensed text-sm sm:text-base lg:text-xl text-white mt-2">
									{envData[activeScreen].caption}
								</p>
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
