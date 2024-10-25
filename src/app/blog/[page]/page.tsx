import BlogList from "@/app/blog/BlogList";
import Pagination from "@/app/components/ui/Pagination";
import { useBlogByPage } from "@/app/hooks/use-blog-by-page";

const Blog = async({ params }: { params: { page: string } }) => {
	const currentPage = parseInt(params.page, 10) || 1;
	const { blogsPerPage, totalPages } = await useBlogByPage(currentPage);

	return (
		// <main className="mx-auto min-h-[85vh] max-w-[1536px] bg-brand-dark-2 grid lg:grid-cols-[1fr_4fr] w-full pt-16 md:pt-24 px-6 sm:px-10 lg:px-20 gap-10">
		<main className="w-4/5 sm:w-[70%] mx-auto min-h-[85vh] max-w-[1536px] bg-brand-dark-2 grid lg:grid-cols-1 pt-16 md:pt-24 gap-10">
			{/* <FilterSearchBar data={["dev"]} /> */}
			<section className="flex h-full flex-col justify-between w-full mx-auto gap-6">
				<BlogList data={blogsPerPage}/>
				<Pagination currentPage={currentPage} totalPages={totalPages} />
			</section>
		</main>
	);
};

export default Blog;
