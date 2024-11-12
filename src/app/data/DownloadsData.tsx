export const DownloadsData: {
	label: string;
	imageSrc: string;
	imageAlt: string;
	fileSrc: string;
	description: string;
}[] = [
	{
		label: "PYTHON PORTAL",
		imageSrc: "/env-python.png",
		imageAlt: "Python portal",
		fileSrc: `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/media/file/python-portal.zip`,
		description:
			"Text-based coding environment ideal for users who want in-depth control and customization of the robot.",
	},
	{
		label: "BLOCK PORTAL",
		imageSrc: "/env-block.png",
		imageAlt: "Block portal",
		fileSrc: `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/media/file/block-portal.zip`,
		description:
			"A beginner-friendly, drag-and-drop platform that makes programming easy and intuitive for those new to coding.",
	},
];
