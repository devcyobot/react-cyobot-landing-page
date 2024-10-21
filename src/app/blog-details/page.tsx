import Image from "next/image";

// Fake Data for the blog
const blogData = {
    title: "Exploring the Future of Arduino Nicla Sense",
    author: "Jane Doe",
    publicationDate: "October 21, 2024",
    featuredImage: "/about-main.jpg",
    content: `
        <p>The Arduino Nicla Sense is revolutionizing the way developers interact with sensor technology. With built-in support for multiple environmental sensors, it's designed for efficient and real-time data processing in various projects. In this post, we will delve into its capabilities and explore how it can be applied in real-world scenarios.</p>
        
        <h2>Features and Capabilities</h2>
        
        <ul>
        <li>Temperature and humidity monitoring</li>
        <li>Air quality sensors</li>
        <li>Low power consumption for energy efficiency</li>
        <li>High processing speed with ARM Cortex-M4</li>
        </ul>
        
        <p>With these features, Arduino continues to empower developers by providing the tools they need to build innovative projects that make a difference in the world.</p>

        <blockquote>"With Nicla Sense Env, we’re taking a critical step toward addressing one of the most pressing challenges of our time: protecting the environment..."</blockquote>

        <p>Compact yet capable: Nicla Sense Env might be small in size, but it’s packed with advanced features that make it a powerhouse for environmental monitoring...</p>
    `,
    categories: ["Arduino", "Tech", "Innovation", "Sensors"],
};

const previousBlog = {
    title: "Understanding IoT with Arduino",
    link: "/",
    image: "/about-main.jpg",
};

const nextBlog = {
    title: "How to Build a Smart Garden with Arduino",
    link: "/",
    image: "/about-main.jpg",
};

export default function BlogDetails() {
  return (
    <main className="w-full mx-auto bg-gray-100 flex flex-col items-center">
        {/* Featured Image */}
        <div className="relative w-full h-80 mt-24">
            <Image
                src={blogData.featuredImage}
                alt={blogData.title}
                layout="fill"
                objectFit="cover"
                className=""
            />
        </div>
        <div className="bg-gray-100 w-full max-w-4xl rounded-lg">
            {/* Breadcrumb */}
            <section className="max-w-4xl mx-auto py-4">
                <nav className="text-sm text-gray-500">
                <a href="/" className="hover:text-gray-800">Blog Home</a>
                <span className="mx-2"> &gt; </span>
                <span className="text-gray-800">{blogData.title}</span>
                </nav>
            </section>

            {/* Blog Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{blogData.title}</h1>

            {/* Author and Date */}
            <div className="flex justify-between text-gray-600 mb-6">
                <p className="text-md">Posted by: {blogData.author} - {blogData.publicationDate}</p>
            </div>

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none text-gray-700">
                <div
                    dangerouslySetInnerHTML={{ __html: blogData.content }}
                />
            </article>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                <div className="flex flex-wrap gap-2">
                    {blogData.categories.map((category) => (
                    <button
                        key={category}
                        className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors duration-300"
                    >
                        {category}
                    </button>
                    ))}
                </div>
            </section>

            {/* Divider Line */}
            <div className="border-t border-gray-300 my-12"></div>

            {/* Previous and Next Blog Posts */}
            <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Previous Blog */}
                <a href={previousBlog.link} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    <h3 className="text-center text-lg text-gray-600 mb-4">PREVIOUS BLOG POST</h3>
                    <Image src={previousBlog.image} alt={previousBlog.title} width={400} height={250} className="rounded-md" />
                    <p className="mt-4 text-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    {previousBlog.title}
                    </p>
                </a>

                {/* Next Blog */}
                <a href={nextBlog.link} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    <h3 className="text-center text-lg text-gray-600 mb-4">NEXT BLOG POST</h3>
                    <Image src={nextBlog.image} alt={nextBlog.title} width={400} height={250} className="rounded-md" />
                    <p className="mt-4 text-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    {nextBlog.title}
                    </p>
                </a>
            </section>
        </div>
    </main>
  );
}
