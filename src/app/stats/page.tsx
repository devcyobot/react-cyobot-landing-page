import Image from 'next/image';

export default function Stats() {
	return (
		<main className="relative w-full h-full bg-brand-gray-light flex justify-center">
			<Image
				src="/stats-specs-cyocrawler.png"
				alt="Stats Specs CYOCrawler"
				quality={100}
				fill
				sizes="(max-width: 1440px) 100vw"
				style={{
					objectFit: 'contain',
					maxHeight: '1067px',
					maxWidth: '1023px',
				}}
			/>
			<Image
				src="/stats-image-cyocrawler.png"
				alt="Stats Image CYOCrawler"
				quality={100}
				fill
				sizes="(max-width: 1440px) 100vw"
				className="justify-self-end self-center"
				style={{
					objectFit: 'contain',
					maxHeight: '490px',
					maxWidth: '637px',
				}}
			/>
			<p className="w-screen h-screen"></p>
		</main>
	);
}
