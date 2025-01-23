"use client"; 

import { useState } from "react"; 
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarClient = ({ user, logoutLink }) => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-gray-800 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                        <Link href="/">BlogLens</Link>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/"
                            className={`text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition-colors ${
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

                {/* Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-2 mt-4">
                            <Link
                                href="/"
                                className={`text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition-colors ${
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
                )}
            </div>
        </nav>
    );
};

export default NavbarClient;