import { WebsiteBlog } from "@/app/types";
import qs from "qs";

export const BLOG_PER_PAGE = 10;

export const useBlogByPageCategory = async (
	currentPage: number,
	category: string
): Promise<{
	blogsPerPage: WebsiteBlog[];
	totalPages: number;
}> => {
	try {
		const blogResponse = await fetch(
			`${process.env.NEXT_PUBLIC_URL}/api/website-blogs?${qs.stringify({
				sort: "-publishedDate",
				page: currentPage,
				limit: BLOG_PER_PAGE,
				where: {
					and: [
						{ _status: { equals: "published" } },
						{ category: { equals: category } },
					],
				},
			})}`,
			{ next: { revalidate: 5 } }
		);

		if (!blogResponse.ok) {
			throw new Error(
				`Error: ${blogResponse.status} ${blogResponse.statusText}`
			);
		}

		const fetchedBlog = await blogResponse.json();

		if (!fetchedBlog || !Array.isArray(fetchedBlog.docs)) {
			throw new Error("Invalid blog data format.");
		}

		return {
			blogsPerPage: fetchedBlog.docs as WebsiteBlog[],
			totalPages: fetchedBlog.totalPages as number,
		};
	} catch (error) {
		console.error("Failed to fetch blog data:", error);
		return { blogsPerPage: [], totalPages: 0 };
	}
};
