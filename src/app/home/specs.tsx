import Card from '../components/ui/card';
import Image from 'next/image';
import { imageBenefits } from '../data/imageSpecs';
import Link from 'next/link';

export default function Specs() {
	return (
		<section className="flex flex-col items-center bg-brand-gray-light">
			<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center w-1/2 lg:w-[45%] h-full my-12">
				TAKE YOU THROUGH 1,000 LEVELS WITH OUR SUPPORTED HARDWARE
			</h2>
			<div
				style={{ backgroundSize: '75%' }}
				className="bg-[url('/specs-background.png')] bg-no-repeat bg-center w-full grid grid-cols-4 justify-items-center items-start gap-y-32 lg:gap-y-44 [grid-template-areas:'card-4_image_image_card-2''card-1_image_image_card-3']"
			>
				{imageBenefits.map((b) => {
					return (
						<Card
							key={b.id}
							image={{ src: b.src, alt: b.alt }}
							color="purple"
							title={b.title}
							text={b.text}
							className={`${b.class} w-[15.063rem] h-[20.625rem]`}
						/>
					);
				})}
				<figure className="relative w-2/5 h-full [grid-area:image] flex felx-col justify-center">
					<Image
						src="/specs-main.png"
						alt="benefits robot"
						quality={100}
						fill
						sizes="(max-width: 1440px) 100vw"
						style={{
							objectFit: 'contain',
							maxHeight: '386px',
							maxWidth: '422px',
						}}
						className="self-center justify-self-center"
					/>
				</figure>
				<figcaption className="[grid-area:image] text-xs md:text-sm lg:text-lg text-brand-purple text-center self-end w-[55%]">
					<div>Our hardware:</div>
					Assembled robot powered by ESP32 with common robotic peripherals,
					motion sensor, microphone, speaker, LED matrix, WiFi and Bluetooth
					module.
				</figcaption>
			</div>
			<Link
				href="/stats"
				className="vt323-regular underline text-base md:text-lg lg:text-2xl underline-offset-4 mt-5"
			>
				&lt;&lt; Stats for nerds &gt;&gt;
			</Link>
		</section>
	);
}
