import { WebsiteBlog } from "@/app/types";
import { FC } from "react";
import BlogCardWrapper from "../components/ui/card/BlogCardWrapper";

type BlogListProps = { data: WebsiteBlog[] };

const BlogList: FC<BlogListProps> = async ({ data: blogCardData }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-8">
			{blogCardData.length > 0 ? (
				blogCardData.map((card) => (
					<BlogCardWrapper key={card.slug} data={card} />
				))
			) : (
				<div className="text-white flex justify-center items-center flex-col col-span-2 mt-10">
					No Blog Found
				</div>
			)}
		</div>
	);
};

export default BlogList;
