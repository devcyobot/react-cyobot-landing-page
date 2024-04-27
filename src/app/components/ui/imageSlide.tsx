import Image from 'next/image';

type ImageSlideProps = {
	src: string;
	alt: string;
	title?: string;
	color: string;
};

export default function ImageSlide({
	src,
	alt,
	title,
	color,
}: ImageSlideProps) {
	let bg = '';
	if (color === 'yellow') bg = '#f3c449';
	else if (color === 'green') bg = '#1ad69c';
	else if (color === 'red') bg = '#e00303';
	else bg = '#3e2486';

	let shadowColor = '';
	if (color === 'yellow' || color === 'red') shadowColor = '#1ad69c';
	else shadowColor = '#f3c449';

	return (
		<div className="flex flex-col items-center">
			<div
				className={`box-border h-[689px] flex flex-col items-center w-full border-dashed-${color} relative h-auto px-14 py-16`}
			>
				<div
					className="w-full h-full shadow-[4px 4px 10px 2px #1ad69c] rounded-[30px]"
					style={{
						backgroundColor: bg,
						boxShadow: `4px 4px 10px 2px ${shadowColor}`,
					}}
				></div>
				<Image
					src={src}
					alt={alt}
					fill
					quality={100}
					sizes="(max-width: 600px) 50vw, 100vw"
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<p
				className={`border-dashed-${color} vt323-regular bg-brand-dark bg-opacity-25 pt-5 text-center w-[30.063rem] h-[5.813rem] mt-12 text-4xl rounded-lg`}
				style={{ fontSize: '4rem' }}
			>
				{title}
			</p>
		</div>
	);
}
