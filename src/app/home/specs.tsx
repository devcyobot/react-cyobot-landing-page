import Image from 'next/image';
import { specsDetailsData } from '../data/imageSpecs';
import DropDown from '../components/ui/DropDown';
import Link from 'next/link';
import './specs.css';

export default function Specs() {
	return (
		<section className="h-auto flex flex-col items-center bg-brand-gray-light pb-56">
			<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center w-1/2 lg:w-full my-10">
				TAKE YOU THROUGH 1,000 LEVELS <br />
				WITH OUR SUPPORTED HARDWARE
			</h2>
			<Link
				href="/stats"
				passHref={true}
				target="_blank"
				className="font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4 mb-24"
			>
				&lt;&lt; Stats for nerds &gt;&gt;
			</Link>
			<div
				style={{ backgroundSize: '75%' }}
				className="relative h-[45rem] max-w-[1440px] bg-[url('/specs-background.png')] bg-no-repeat bg-center w-full"
			>
				<figure className="relative left-80 w-1/2 h-full">
					<Image
						src="/specs-main.png"
						alt="benefits robot"
						quality={100}
						fill
						sizes="(max-width: 1440px) 100vw"
						style={{
							objectFit: 'contain',
							maxHeight: '350px',
							maxWidth: '450px',
						}}
						className="self-center justify-self-center"
					/>
				</figure>
				{specsDetailsData.map((detail, index) => (
					<div
						key={`specs-details-dropdown-${index}`}
						className={`absolute detail-item item-${index + 1}`}
					>
						<DropDown
							label={detail.label}
							src={detail.src}
							src2={detail.src2}
							caption={detail.caption}
							index={index + 1}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
