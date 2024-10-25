import { LayoutBlockTemplate } from "@/app/components/block/layout-block-template";
import { Badge } from "@/app/components/ui/Badge";
import useBlogContentByID from "@/app/hooks/use-blog-content-by-id";
import { useCategoryByIds } from "@/app/hooks/use-categories-by-ids";
import { useMedia } from "@/app/hooks/use-media";
import { Media } from "@/app/types";
import formatDate from "@/app/utils/date-formatter";
import Image from "next/image";
import Link from 'next/link';
import { redirect } from "next/navigation";

const previousBlog = {
    title: "Understanding IoT with Arduino",
    link: "/blog/1",
    image: "/about-main.jpg",
};

const nextBlog = {
    title: "How to Build a Smart Garden with Arduino",
    link: "/blog/1",
    image: "/about-main.jpg",
};

const BlogDetails = async({ params }: { params: { blogId: string } }) => {
    const blogId = params.blogId;
    const blogData = await useBlogContentByID(blogId);
    if (!blogData) {
        redirect('/blog/1')
    }

    const categoryIds = Array.from(
        new Set(blogData.category
            ? blogData.category.filter((cat) => typeof cat === "string")
            : []
        )
    )
    const { categoryList } = await useCategoryByIds(categoryIds);
    const featuredImage: Media | null = await useMedia(blogData.featuredImage);
    if (!featuredImage) return null;
    return (
        <main className="w-full mx-auto bg-gray-100 flex flex-col items-center">
            {/* Featured Image */}
            <div className="relative w-full h-80 mt-24">
                <Image
                    src={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}${featuredImage.url}`}
                    alt={featuredImage.alt ?? ""}
                    layout="fill"
                    objectFit="cover"
                    className=""
                />
            </div>
            <div className="bg-gray-100 w-full max-w-4xl rounded-lg">
                {/* Breadcrumb */}
                 <section className="max-w-4xl mx-auto py-4">
                    <nav className="text-sm text-gray-500">
                        <Link href="/blog/1" className="hover:text-gray-800">
                            Blog Home
                        </Link>
                        <span className="mx-2"> &gt; </span>
                        <span className="text-gray-800">{blogData.pageTitle}</span>
                    </nav>
                </section>

                {/* Blog Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{blogData.pageTitle}</h1>

                {/* Date */}
                <div className="flex justify-between text-gray-600 mb-6">
                    <p className="text-md">{formatDate(blogData.publishedDate)}</p>
                </div>

                {/* Blog Content */}
                <article className="prose prose-lg max-w-none text-gray-700">
                    {
                        blogData.contents.map((content, i) => (
                            <LayoutBlockTemplate layoutBlock={content} key={i}/>
                        ))
                    }
                </article>

                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <div className="flex flex-wrap gap-2">
                        {categoryList.length > 0 &&
                            categoryList.map((category, i) => (
                                <Badge
                                    key={i}
                                    // key={act.tags.topic.slug}
                                    // style={{ backgroundColor: act.tags.topic.color }}
                                    className="mr-1"
                                >
                                    {category.displayName}
                                </Badge>
                            ))}
                    </div>
                </section>

                {/* Divider Line */}
                <div className="border-t border-gray-300 my-12"></div>

                {/* Previous and Next Blog Posts */}
                {/* <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link href={previousBlog.link} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        <h3 className="text-center text-lg text-gray-600 mb-4">PREVIOUS BLOG POST</h3>
                        <Image src={previousBlog.image} alt={previousBlog.title} width={400} height={250} className="rounded-md" />
                        <p className="mt-4 text-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                        {previousBlog.title}
                        </p>
                    </Link>

                    <Link href={nextBlog.link} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        <h3 className="text-center text-lg text-gray-600 mb-4">NEXT BLOG POST</h3>
                        <Image src={nextBlog.image} alt={nextBlog.title} width={400} height={250} className="rounded-md" />
                        <p className="mt-4 text-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                        {nextBlog.title}
                        </p>
                    </Link>
                </section> */}
            </div>
        </main>
    );
}

export default BlogDetails;