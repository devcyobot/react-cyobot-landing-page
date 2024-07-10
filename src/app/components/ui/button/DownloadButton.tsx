import Link from "next/link";
import { FC } from "react";

type DownloadButtonProps = {
	url: string;
	description: string;
};

const DownloadButton: FC<DownloadButtonProps> = (props) => {
	return (
		<button
			type="button"
			className="hover:shadow-[4px_4px_4px_#1AD69C] font-roboto text-lg lg:text-xl xl:text-2xl font-medium py-1 lg:py-2 px-3 lg:px-12 text-brand-purple bg-white shadow-md rounded-lg border-none justify-self-end"
		>
			<Link href={props.url}>{props.description}</Link>
		</button>
	);
};

export default DownloadButton;
