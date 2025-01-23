"use client"; 

import { usePathname } from "next/navigation"; 
import Navbar from "./Navbar"; 

const NavbarPathName = () => {
    const pathname = usePathname(); 

    return <Navbar pathname={pathname} />; 
};

export default NavbarPathName;