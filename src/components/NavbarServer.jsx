import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";
const NavbarServer = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser(); 
    const logoutLink = <LogoutLink className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Sign out</LogoutLink>;

    return <NavbarClient user={user} logoutLink={logoutLink} />; 
};

export default NavbarServer;