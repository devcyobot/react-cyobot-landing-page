import { Button } from "@/app/components/ui/Button";
import { FC, useEffect, useState } from "react";
type PopupDownloadsProps = {
	link: string;
	description: string;
	onClose: () => void;
};

const PopupDownloads: FC<PopupDownloadsProps> = (props) => {
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

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center sm:bg-black sm:bg-opacity-50 transition-opacity duration-300 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<div
				className={`bg-brand-purple-dark rounded-xl shadow-lg p-4 w-full h-full max-w-xl max-h-80 overflow-auto flex flex-col transform transition-all duration-300 ${
					isVisible
						? "scale-100 translate-y-0 opacity-100"
						: "scale-90 -translate-y-10 opacity-0"
				}`}
			>
				<div className="flex justify-end">
					<button
						onClick={handleClose}
						className="text-white bg-transparent hover:bg-gray-500 rounded transition w-8"
					>
						&#10005;
					</button>
				</div>
				<div className="justify-self-center h-full flex flex-col justify-evenly items-center">
					<p className="mt-2 text-3xl lg:text-4xl text-white font-vt323 text-center">
						{props.description} Portal
					</p>
					<Button
						variant={"shadow"}
						size="lg"
						className="md:text-xl xl:text-2x text-brand-purple font-roboto font-medium"
						onClick={() => {
							window.open(props.link, "_blank");
						}}
					>
						Download
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PopupDownloads;
