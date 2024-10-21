import BlogList from "@/app/blog/BlogList";
import Pagination from "@/app/components/ui/Pagination";
import { BLOG_PER_PAGE, useBlogByPage } from "@/app/hooks/use-blog-by-page";
import { useCountBlog } from "@/app/hooks/use-count-blog";

const Blog = async ({ params }: { params: { page: string } }) => {
	const currentPage = parseInt(params.page, 10) || 1;
	const blogCount = await useCountBlog();
	const totalPages =
		blogCount !== null ? Math.ceil(blogCount / BLOG_PER_PAGE) : 0;
	const totalBlog = blogCount !== null ? blogCount : 0;
	const fetchedBlog = await useBlogByPage(currentPage, totalBlog);
	console.log(fetchedBlog);

	return (
		// <main className="mx-auto min-h-[85vh] max-w-[1536px] bg-brand-dark-2 grid lg:grid-cols-[1fr_4fr] w-full pt-16 md:pt-24 px-6 sm:px-10 lg:px-20 gap-10">
		<main className="w-4/5 sm:w-[70%] mx-auto min-h-[85vh] max-w-[1536px] bg-brand-dark-2 grid lg:grid-cols-1 pt-16 md:pt-24 gap-10">
			{/* <FilterSearchBar data={["dev"]} /> */}
			<section className="flex h-full flex-col justify-between w-full mx-auto gap-6">
				<BlogList data={fetchedBlog} />
				<Pagination currentPage={currentPage} totalPages={totalPages} />
			</section>
		</main>
	);
};

export default Blog;
