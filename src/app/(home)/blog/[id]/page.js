import Link from "next/link";

const SinglePost = async ({ params }) => {
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    console.log(post);

    return (
        <div className="container mx-auto px-4 py-12 min-h-[70vh] flex flex-col justify-center ">
            <div className="mb-8">
                <Link
                    href='/'
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Home
                </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="prose max-w-3xl mx-auto">
                <p className="text-gray-700">{post.body}</p>
            </div>
        </div>
    );
};

export default SinglePost;