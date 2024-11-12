"use server";
import { WebsiteBlog } from "@/app/types";
import qs from "qs";

export const useBlogNeighbors = async (
	currentBlog: WebsiteBlog
): Promise<{
	previousBlog: WebsiteBlog | null;
	nextBlog: WebsiteBlog | null;
}> => {
	try {
		const previousBlogQuery = qs.stringify({
			sort: ["-publishedDate", "-createdAt"],
			where: {
				_status: { equals: "published" },
				or: [
					{ publishedDate: { less_than: currentBlog.publishedDate } },
					{
						publishedDate: { equals: currentBlog.publishedDate },
						createdAt: { less_than: currentBlog.createdAt },
					},
				],
			},
		});

		const nextBlogQuery = qs.stringify({
			sort: "publishedDate",
			where: {
				_status: { equals: "published" },
				or: [
					{ publishedDate: { greater_than: currentBlog.publishedDate } },
					{
						publishedDate: { equals: currentBlog.publishedDate },
						createdAt: { greater_than: currentBlog.createdAt },
					},
				],
			},
		});

		const [previousResponse, nextResponse] = await Promise.all([
			fetch(
				`${process.env.NEXT_PUBLIC_URL}/api/website-blogs?${previousBlogQuery}`,
				{ cache: "no-store" }
			),
			fetch(
				`${process.env.NEXT_PUBLIC_URL}/api/website-blogs?${nextBlogQuery}`,
				{ cache: "no-store" }
			),
		]);

		if (!previousResponse.ok) {
			throw new Error(
				`Error: ${previousResponse.status} ${previousResponse.statusText}`
			);
		}

		if (!nextResponse.ok) {
			throw new Error(
				`Error: ${nextResponse.status} ${nextResponse.statusText}`
			);
		}

		const previousBlog = await previousResponse.json();
		const nextBlog = await nextResponse.json();

		return {
			previousBlog: previousBlog.docs?.[0] || null,
			nextBlog: nextBlog.docs?.[0] || null,
		};
	} catch (error) {
		console.error("Failed to fetch previous and next blog data:", error);
		return { previousBlog: null, nextBlog: null };
	}
};
