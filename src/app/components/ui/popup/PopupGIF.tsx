import { FC, useEffect, useState } from "react";
import Image from "next/image";

type PopupGIFProps = {
	src: string;
	alt: string;
	description: string;
	onClose: () => void;
};

const PopupGIF: FC<PopupGIFProps> = (props) => {
	const [isVisible, setIsVisible] = useState<Boolean>(false);
	const [isLoading, setIsLoading] = useState<Boolean>(true);

	useEffect(() => {
		// Trigger the visibility state after the component has mounted
		setTimeout(() => setIsVisible(true), 10); // Small delay to ensure mounting transition
	}, []);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(props.onClose, 300); // Delay to match the transition duration
	};

	const handleLoad = () => {
		setIsLoading(false);
	};

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center sm:bg-black sm:bg-opacity-50 transition-opacity duration-300 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<div
				className={`bg-brand-dark rounded-xl shadow-lg p-4 w-full h-full max-w-xl max-h-80 overflow-auto flex flex-col transform transition-all duration-300 ${
					isVisible
						? "scale-100 translate-y-0 opacity-100"
						: "scale-90 -translate-y-10 opacity-0"
				}`}
			>
				<div className="flex justify-end">
					<button
						onClick={handleClose}
						className="text-white bg-transparent hover:bg-gray-500 rounded transition w-5"
					>
						&#10005;
					</button>
				</div>
				<div className="relative h-full flex flex-col justify-evenly">
					{isLoading && (
						<svg
							width="34"
							height="34"
							viewBox="0 0 50 50"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="w-full"
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
						loading="lazy"
						src={props.src}
						alt={props.alt}
						fill
						quality={100}
						sizes="80vw"
						className="object-contain"
						onLoad={handleLoad}
					/>
				</div>
				<p className="mt-2 font-bold text-xl lg:text-2xl text-white font-roboto text-center">
					{props.description}
				</p>
			</div>
		</div>
	);
};

export default PopupGIF;
