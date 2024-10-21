import { WebsiteBlog } from "@/app/types";
import qs from "qs";

export const BLOG_PER_PAGE = 5;

export const useBlogByPage = async (
	currentPage: number,
	totalBlog: number
): Promise<WebsiteBlog[]> => {
	try {
		const maxQuantile = Math.ceil(totalBlog / BLOG_PER_PAGE);
		if (currentPage > maxQuantile) {
			throw new Error(
				`Quantile ${currentPage} exceeds the total available pages.`
			);
		}

		const offset = (currentPage - 1) * BLOG_PER_PAGE;
		const itemsLeft = totalBlog - offset;
		const fetchLimit = itemsLeft < BLOG_PER_PAGE ? itemsLeft : BLOG_PER_PAGE;

		const blogResponse = await fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/website-blogs?${qs.stringify(
				{
					sort: "-publishedDate",
					offset,
					limit: fetchLimit,
					where: { _status: { equals: "published" } },
				}
			)}`,
			// { next: { revalidate: 5 } }
			{ cache: "no-store" }
		);

		console.log(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/website-blogs?${qs.stringify(
				{
					sort: "-publishedDate",
					offset,
					limit: fetchLimit,
					where: { _status: { equals: "published" } },
				}
			)}`
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

		return fetchedBlog.docs as WebsiteBlog[];
	} catch (error) {
		console.error("Failed to fetch blog data:", error);
		return [];
	}
};
