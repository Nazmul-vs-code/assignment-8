"use client";
import Link from "next/link";
import { PiCowFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">

      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* mobile menu button */}
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          {/* mobile dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-animals">All Animals</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/" className="hidden md:flex btn btn-ghost text-xl items-center gap-2">
          <PiCowFill />
          Animal Shop
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-animals">All Animals</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-2">

        
        <div className="hidden md:flex gap-2">
          <Link href="/login" className="btn btn-sm">Login</Link>
          <Link href="/register" className="btn btn-primary btn-sm">Register</Link>
        </div>

        
        <Link href="/" className="md:hidden btn btn-ghost text-xl flex items-center gap-2">
          <PiCowFill />
          Animal Shop
        </Link>
      </div>

    </div>
  );
};

export default Navbar;