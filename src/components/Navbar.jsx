import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";

const Navbar = async() => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <div className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
            <div>Logo</div>
            <div className="flex space-x-4">
                <Link href="/">Home</Link>
                <Link href="/all-posts">All Posts</Link>

                {
                    user ?
                        <>
                            <Link href="/my-profile">My Profile</Link>
                            <Link href="/api/auth/logout">Sign Out</Link>
                        </>
                        :
                        <>
                            <Link href="/api/auth/login">Sign In</Link>
                            <Link href="/api/auth/register">Sign Up</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;