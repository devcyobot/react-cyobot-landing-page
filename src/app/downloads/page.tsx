import {
	BlogCard,
	BlogCardContent,
	BlogCardDescription,
	BlogCardHeader,
	BlogCardTitle,
} from "@/app/components/ui/card/BlogCard";
import { Link } from "@/app/components/ui/Link";
import { DownloadsData } from "@/app/data/DownloadsData";
import Image from "next/image";
import { FC } from "react";

const DownloadsPage: FC = () => {
	return (
		<main className="mt-2 mx-auto min-h-[85vh] max-w-[1536px] bg-brand-dark-2 grid w-full pt-16 md:pt-24 px-6 sm:px-10 lg:px-20 gap-10">
			<div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-20">
				{DownloadsData.map((item, i) => (
					<BlogCard
						key={i}
						className="font-roboto relative max-h-[40rem] min-h-72"
					>
						<figure className="relative h-56 sm:h-80 mx-auto">
							<Image
								src={item.imageSrc}
								alt={item.imageAlt}
								sizes="(max-width: 1024px) 90vw, 50vw"
								fill
								className="aspect-video rounded-t-lg object-contain"
							/>
						</figure>
						<BlogCardHeader>
							<BlogCardTitle>{item.label}</BlogCardTitle>
						</BlogCardHeader>
						<BlogCardContent>
							<BlogCardDescription className="font-nunito line-clamp-6 mb-12">
								{item.description}
							</BlogCardDescription>
						</BlogCardContent>
						<Link
							href={item.fileSrc}
							variant={"outline"}
							// size="xl"
							className="absolute bottom-5 inset-x-1/3 text-brand-purple"
						>
							Download
						</Link>
					</BlogCard>
				))}
			</div>
		</main>
	);
};

export default DownloadsPage;
