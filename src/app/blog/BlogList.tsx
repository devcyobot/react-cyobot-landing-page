import {
	BlogCard,
	BlogCardCategory,
	BlogCardContent,
	BlogCardDescription,
	BlogCardHeader,
	BlogCardImage,
	BlogCardTitle,
} from "@/app/components/ui/card/BlogCard";
import { Link } from "@/app/components/ui/Link";
import { WebsiteBlog } from "@/app/types";
import { FC } from "react";

type BlogListProps = {
	data: WebsiteBlog[];
};

const BlogList: FC<BlogListProps> = ({ data: blogCardData }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-8">
			{blogCardData.length > 0 ? (
				blogCardData.map((card, index) => (
					<BlogCard
						className="font-roboto relative max-h-[45rem] min-h-72"
						key={index}
					>
						{card.featuredImage && (
							<figure className="relative h-80 mx-auto">
								<BlogCardImage image={card.featuredImage} />
							</figure>
						)}
						<BlogCardHeader>
							<BlogCardTitle>{card.pageTitle}</BlogCardTitle>
						</BlogCardHeader>
						<BlogCardContent>
							<BlogCardDescription className="font-nunito line-clamp-6 mb-12">
								{card.description}
							</BlogCardDescription>
							<div className="flex flex-row flex-wrap mt-4 gap-y-1 w-[60%]">
								<BlogCardCategory category={card.category ?? []} />
								{/* {categoryList.length > 0 &&
									categoryList.map((category, i) => (
										<Badge
											key={i}
											// key={act.tags.topic.slug}
											// style={{ backgroundColor: act.tags.topic.color }}
											className="mr-1"
										>
											{category.displayName}
										</Badge>
								))} */}
							</div>
						</BlogCardContent>
						<Link
							href={`/blog-details/${card.id}`}
							variant={"outline"}
							className="absolute bottom-5 right-5 text-brand-purple"
						>
							Read More
						</Link>
					</BlogCard>
				))
			) : (
				<div className="text-white col-span-2 flex justify-center items-center flex-col space-y-8">
					No Blog Found
				</div>
			)}
		</div>
	);
};

export default BlogList;
