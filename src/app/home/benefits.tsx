import Card from '../components/ui/card';
import Image from 'next/image';
import { imageBenefits } from '../data/imageBenefits';
import Link from 'next/link';

export default function Benefits() {
	return (
		<section className="flex flex-col items-center bg-brand-gray-light">
			<h2 className="text-5xl text-center w-2/3">
				TAKE YOU THROUGH 1,000 LEVELS AND MASTER ROBOTICS IN 1 KIT
			</h2>
			<div className="bg-[url('/benefits-background.png')] bg-no-repeat bg-cover grid grid-cols-3 justify-items-center [grid-template-areas:'card-4_image_card-2''card-1_image_card-3']">
				{imageBenefits.map((b) => {
					return (
						<Card
							key={b.id}
							image={{ src: b.src, alt: b.alt }}
							color="purple"
							title={b.title}
							text={b.text}
							className={b.class}
						/>
					);
				})}
				<figure className="[grid-area:image] self-end">
					<Image
						src="/benefits-main.png"
						alt="benefits robot"
						width={450}
						height={450}
					/>
					<figcaption className="text-brand-purple text-center mx-auto">
						Our hardware: Assembled robot powered by ESP32 with common robotic
						peripherals, motion sensor, microphone, speaker, LED matrix, WiFi
						and Bluetooth module.
					</figcaption>
				</figure>
			</div>
			<Link
				href="/stats"
				className="my-10 vt323-regular underline text-2xl underline-offset-4"
			>
				&lt;&lt; Stats for nerds &gt;&gt;
			</Link>
		</section>
	);
}
