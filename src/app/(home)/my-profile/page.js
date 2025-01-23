import { redirect } from "next/navigation";
import { getKindeServerSession, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

const MyProfile = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();

    // Redirect to login if not authenticated
    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }

    const user = await getUser();

    return (
        <div className="min-h-[70vh] bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md text-center container mx-auto ">
                {/* Welcome Message */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Welcome,{" "}
                    <span className="text-blue-600">
                        {user.given_name} {user.family_name}
                    </span>
                    !
                </h1>

                {/* User Details */}
                <div className="space-y-4 text-center">
                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-lg font-medium text-gray-900">{user.email}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="text-lg font-medium text-gray-900">
                            {user.given_name} {user.family_name}
                        </p>
                    </div>
                </div>

                {/* Logout Button */}
                <div className="mt-8">
                    <LoginLink
                        className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Logout
                    </LoginLink>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;