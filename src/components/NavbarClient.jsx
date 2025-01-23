"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarClient = ({ user, logoutLink }) => {
    const pathname = usePathname();

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
                            className={`text-gray-300 hover:text-white  py-2 rounded-md text-sm font-medium transition-colors ${
                                pathname === "/" ? "border-b-2 border-white rounded-none" : ""
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/all-posts"
                            className={`text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition-colors ${
                                pathname === "/all-posts" ? "border-b-2 border-white rounded-none" : ""
                            }`}
                        >
                            All Posts
                        </Link>
                        {user ? (
                            <>
                                <Link
                                    href="/my-profile"
                                    className={`text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition-colors ${
                                        pathname === "/my-profile" ? "border-b-2 border-white rounded-none" : ""
                                    }`}
                                >
                                    My Profile
                                </Link>
                                {logoutLink}
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/api/auth/login"
                                    className={`text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition-colors ${
                                        pathname === "/api/auth/login" ? "border-b-2 border-white rounded-none" : ""
                                    }`}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/api/auth/register"
                                    className={`text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition-colors ${
                                        pathname === "/api/auth/register" ? "border-b-2 border-white rounded-none" : ""
                                    }`}
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

export default NavbarClient;