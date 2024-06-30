const FooterLink: FC = () => {
	return (
		<li className="text-sm sm:text-base lg:text-lg xl:text-xl">
			<Link
				href="https://cyobot.myshopify.com/products/cyocrawler"
				passHref={true}
				target="_blank"
			>
				CYOCrawler
			</Link>
			RoboticsQuest
		</li>
	);
};

export default FooterLink;
