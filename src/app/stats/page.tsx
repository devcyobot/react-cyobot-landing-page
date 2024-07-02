import Image from 'next/image';

export default function Stats() {
	return (
		<main className="w-full h-screen lg:h-[85vh] bg-brand-gray-light">
			<section className="py-16 lg:py-24 relative w-full h-full mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr]">
				<figure className="relative my-10 h-full">
					<Image
						src="/stats-specs-cyocrawler.png"
						alt="Stats Specs CYOCrawler"
						quality={100}
						fill
						sizes="(max-width: 1440px) 100vw"
						className="object-contain"
					/>
				</figure>
				<figure className="relative my-10 h-full">
					<Image
						src="/stats-image-cyocrawler.png"
						alt="Stats Image CYOCrawler"
						quality={100}
						fill
						sizes="(max-width: 1440px) 100vw"
						className="object-contain"
					/>
				</figure>
			</section>
		</main>
	);
}
