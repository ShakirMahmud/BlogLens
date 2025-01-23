import Link from "next/link";
import PostsCards from "./PostsCards";

const HomePostSection = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
                <p className="text-lg text-gray-600">
                    Explore our latest articles and stay updated with the newest trends.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.slice(0, 6).map((post) => (
                    <PostsCards key={post.id} post={post} />
                ))}
            </div>
            <div className="text-center mt-8">
                <Link
                    href="/all-posts"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    View All Posts
                </Link>
            </div>
        </div>
    );
};

export default HomePostSection;