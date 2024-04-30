import Card from '../components/ui/card';
import Image from 'next/image';
import { imageBenefits } from '../data/imageSpecs';
import Link from 'next/link';

export default function Benefits() {
	return (
		<section className="flex flex-col items-center bg-brand-gray-light pb-24 px-8">
			<h2 className="text-6xl text-center w-4/5 lg:w-[77.25rem] lg:px-56">
				TAKE YOU THROUGH 1,000 LEVELS WITH OUR SUPPORTED HARDWARE
			</h2>
			<div className="relative bg-[url('/specs-background.png')] bg-no-repeat bg-contain h-[60rem] grid grid-cols-4 justify-items-center items-end lg:gap-y-56 lg:gap-x-36 [grid-template-areas:'card-4_image_image_card-2''card-1_image_image_card-3']">
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
				<figure className="[grid-area:image] self-end flex flex-col">
					<Image
						src="/benefits-main.png"
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
					<figcaption className="text-brand-purple text-center w-[35.813rem] h-[8.25rem] mt-28">
						<div>Our hardware:</div>
						Assembled robot powered by ESP32 with common robotic peripherals,
						motion sensor, microphone, speaker, LED matrix, WiFi and Bluetooth
						module.
					</figcaption>
				</figure>
			</div>
			<Link
				href="/stats"
				className="cursor-pointer mt-12 vt323-regular underline text-2xl underline-offset-4"
			>
				&lt;&lt; Stats for nerds &gt;&gt;
			</Link>
		</section>
	);
}
