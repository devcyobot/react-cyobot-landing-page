import { Badge } from "@/app/components/ui/Badge";
import { Link } from "@/app/components/ui/Link";
import { useCategoryByIds } from "@/app/hooks/use-categories-by-ids";
import { WebsiteBlog } from "@/app/types";
import { FC } from "react";
import {
	BlogCard,
	BlogCardContent,
	BlogCardDescription,
	BlogCardHeader,
	BlogCardImage,
	BlogCardTitle,
} from "./BlogCard";

type BlogCardWrapper = {
	data: WebsiteBlog;
};
const BlogCardWrapper: FC<BlogCardWrapper> = async ({ data }) => {
	const categoryIds = Array.from(
		new Set(
			data.category
				? data.category.filter((cat) => typeof cat === "string")
				: []
		)
	);
	const { categoryList } = await useCategoryByIds(categoryIds);

	return (
		<BlogCard className="font-roboto relative max-h-[45rem] min-h-72">
			{data.featuredImage && (
				<figure className="relative h-80 mx-auto">
					<BlogCardImage image={data.featuredImage} />
				</figure>
			)}
			<BlogCardHeader>
				<BlogCardTitle>{data.pageTitle}</BlogCardTitle>
			</BlogCardHeader>
			<BlogCardContent>
				<BlogCardDescription className="font-nunito line-clamp-6 mb-12">
					{data.description}
				</BlogCardDescription>
				<div className="flex flex-row flex-wrap mt-4 gap-y-1 w-[60%]">
					{categoryList.length > 0 &&
						categoryList.map((category) => (
							<Badge key={category.slug} className="mr-1">
								{category.displayName}
							</Badge>
						))}
				</div>
			</BlogCardContent>
			<Link
				href={`/blog-details/${data.id}`}
				variant={"outline"}
				className="absolute bottom-5 right-5 text-brand-purple"
			>
				Read More
			</Link>
		</BlogCard>
	);
};

export default BlogCardWrapper;
