import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <nav className="sticky top-0 z-50 bg-gray-800 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                        <Link href="/">BlogLens</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/all-posts"
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            All Posts
                        </Link>
                        {user ? (
                            <>
                                <Link
                                    href="/my-profile"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    My Profile
                                </Link>
                                <LogoutLink className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Sign out
                                </LogoutLink>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/api/auth/login"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/api/auth/register"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;