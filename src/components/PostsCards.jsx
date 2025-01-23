import Link from "next/link";

const PostsCards = ({ post }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600">
                    {post.body.substring(0, 100)}...
                </p>
            </div>
            
            <div className="p-6">
                <Link
                    href={`/blog/${post.id}`}
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default PostsCards;