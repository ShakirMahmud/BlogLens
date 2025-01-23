import PostsCards from "@/components/PostsCards";
import Link from "next/link";

const AllPosts = async ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1; // Current page
    const limit = 9; // Number of posts per page
    const totalPosts = 100; // Total number of posts (hardcoded for this example)
    const totalPages = Math.ceil(totalPosts / limit); // Total number of pages

    // Fetch posts for the current page
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const posts = await res.json();

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">All Posts</h1>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <PostsCards key={post.id} post={post} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-4">
                {/* Previous Button */}
                <Link
                    href={`/all-posts?page=${page - 1}`}
                    className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${
                        page <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                    }`}
                >
                    Previous
                </Link>

                {/* Page Numbers */}
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <Link
                            key={pageNumber}
                            href={`/all-posts?page=${pageNumber}`}
                            className={`px-4 py-2 rounded-lg ${
                                pageNumber === page
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            {pageNumber}
                        </Link>
                    ))}
                </div>

                {/* Next Button */}
                <Link
                    href={`/all-posts?page=${page + 1}`}
                    className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${
                        page >= totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                    }`}
                >
                    Next
                </Link>
            </div>
        </div>
    );
};

export default AllPosts;