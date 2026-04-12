'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    // console.log(pathname, 'pathname');

    const navLinks = <>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/bookslist'}>Books List</Link></li>
    <li><Link href={'/pagesread'}>Pages to Read</Link></li>
    </>

    return ( 
        <div className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                    </div>
                    <a className="text-xl">
                        <span className="font-bold">Book Vibe</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    <button className="btn bg-[#23BE0A] text-white rounded-lg">Signin</button>
                    <button className="btn bg-[#59C6D2] text-white rounded-lg">Signup</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;