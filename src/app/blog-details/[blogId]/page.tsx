import { LayoutBlockTemplate } from "@/app/components/block/layout-block-template";
import { Badge } from "@/app/components/ui/Badge";
import useBlogContentById from "@/app/hooks/use-blog-content-by-id";
import { useBlogNeighbors } from "@/app/hooks/use-blog-neighbors";
import { useCategoryByIds } from "@/app/hooks/use-categories-by-ids";
import { useMedia } from "@/app/hooks/use-media";
import { Media } from "@/app/types";
import formatDate from "@/app/utils/date-formatter";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const BlogDetails = async ({ params }: { params: { blogId: string } }) => {
	const blogId = params.blogId;
	const blogData = await useBlogContentById(blogId);
	if (!blogData) {
		redirect("/blog/1");
	}

	const { previousBlog, nextBlog } = await useBlogNeighbors(blogData);

	const categoryIds = Array.from(
		new Set(
			blogData.category
				? blogData.category.filter((cat) => typeof cat === "string")
				: []
		)
	);
	const { categoryList } = await useCategoryByIds(categoryIds);
	const featuredImage: Media | null = await useMedia(blogData.featuredImage);
	const previousBlogImage: Media | null = await useMedia(
		previousBlog ? previousBlog.featuredImage : null
	);
	const nextBlogImage: Media | null = await useMedia(
		nextBlog ? nextBlog.featuredImage : null
	);
	if (!featuredImage) return null;

	return (
		<main className="w-full mx-auto bg-gray-100 flex flex-col items-center">
			<div className="flex flex-col lg:flex-row w-full my-12 bg-[#f3d1af] h-[400px] lg:mt-24 ">
				<div className="flex-1 p-4 lg:p-6 flex flex-col justify-between">
					<nav className="text-sm text-gray-500 mb-2">
						<Link href="/blog/1" className="hover:text-gray-800">
							Blog Home
						</Link>
						<span className="mx-2"> &gt; </span>
						<span className="text-gray-800">{blogData.pageTitle}</span>
					</nav>
					<div className="flex-grow">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
							{blogData.pageTitle}
						</h1>
					</div>
					<div className="text-gray-600">
						<p className="text-sm sm:text-base">
							{formatDate(blogData.publishedDate)}
						</p>
						<p className="text-xs sm:text-sm font-light">
							{blogData.description}
						</p>
					</div>
				</div>
				<div className="flex-1 relative w-full h-full lg:h-auto shadow-md">
					 <Image
						src={featuredImage?.url ? `${process.env.NEXT_PUBLIC_DASHBOARD_URL}${featuredImage.url}` : ''}
						alt={featuredImage?.alt || ""}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>
			</div>

			{/* content */}
			<div className="bg-gray-100 w-full max-w-4xl px-8 rounded-lg">
				<article className="prose prose-lg max-w-full text-gray-700 mb-8">
					{blogData.contents.map((content, i) => (
						<LayoutBlockTemplate layoutBlock={content} key={i} />
					))}
				</article>
				<section className="mt-8">
					<h2 className="text-xl sm:text-2xl font-semibold mb-4">Categories</h2>
					<div className="flex flex-wrap gap-2">
						{categoryList.length > 0 &&
							categoryList.map((category, i) => (
								<Badge key={i} className="mr-1">
									{category.displayName}
								</Badge>
							))}
					</div>
				</section>
				<div className="border-t border-gray-300 my-8"></div>
				<section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
					{previousBlog && (
						<Link
							href={`/blog-details/${previousBlog.id}`}
							className="flex flex-col items-center bg-gray-200 p-4 rounded-lg 
										transition-colors duration-300 hover:bg-brand-dark-2 group"
						>
							<h3
								className="text-center text-base sm:text-lg text-brand-purple-dark 
										mb-2 transition-colors duration-300 group-hover:text-brand-gray-light"
							>
								PREVIOUS BLOG POST
							</h3>
							<div className="w-full h-full overflow-hidden rounded-md">
								<Image
									src={previousBlogImage?.url ? `${process.env.NEXT_PUBLIC_DASHBOARD_URL}${previousBlogImage.url}` : ''}
									alt={previousBlog.pageTitle || "Blog Image"}
									width={300}
									height={200}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{ width: "100%", height: "100%" }}
									priority		
								/>
							</div>
							<p
								className="mt-2 text-center text-brand-dark-2 
										transition-colors duration-300 group-hover:text-brand-gray-light"
							>
								{previousBlog.pageTitle}
							</p>
						</Link>
					)}
					{nextBlog && (
						<Link
							href={`/blog-details/${nextBlog.id}`}
							className="flex flex-col items-center bg-gray-200 p-4 rounded-lg 
										transition-colors duration-300 hover:bg-brand-dark-2 group"
						>
							<h3
								className="text-center text-base sm:text-lg text-brand-purple-dark 
										mb-2 transition-colors duration-300 group-hover:text-brand-gray-light"
							>
								NEXT BLOG POST
							</h3>
							<div className="w-full h-full overflow-hidden rounded-md">
								<Image
									src={nextBlogImage?.url ? `${process.env.NEXT_PUBLIC_DASHBOARD_URL}${nextBlogImage.url}` : ''}
									alt={nextBlog.pageTitle || "Blog Image"}
									width={300}
									height={200}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{ width: "100%", height: "100%" }}		
									priority
								/>
							</div>
							<p
								className="mt-2 text-center text-brand-dark-2 
										transition-colors duration-300 group-hover:text-brand-gray-light"
							>
								{nextBlog.pageTitle}
							</p>
						</Link>
					)}
				</section>
			</div>
		</main>
	);
};
export default BlogDetails;
