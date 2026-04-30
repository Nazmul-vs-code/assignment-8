"use client";
import { useSession, authClient } from "@/lib/auth-client";
import Link from "next/link";
import { PiCowFill } from "react-icons/pi";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const router = useRouter();
  const sessionData = useSession();
  const user = sessionData?.data?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },

    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow gap-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-animals">All Animals</Link></li>
            {!user && (
              <>
                <div className="divider my-0"></div>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
              </>
            )}
            {/* Mobile-only logout option inside the menu */}
            {user && (
              <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
            )}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <PiCowFill className="text-orange-600 text-2xl" />
          <span className="font-black tracking-tighter">Animal Shop</span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-animals">All Animals</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-4">
        {!user ? (
          <div className="hidden lg:flex gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm font-bold">Login</Link>
            <Link href="/register" className="btn btn-primary btn-sm px-6">Register</Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">

            {/* Desktop/Tablet View (Visible on md and lg) */}
            <div className="hidden md:flex items-center gap-3 bg-slate-50 p-1 pr-4 rounded-full border border-slate-200">
              <div className="avatar">
                <div className="w-10 rounded-full relative">
                  <Image
                    src={user.image || "https://i.ibb.co.com/4P68Xm8/user.png"}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-gray-800 leading-tight">{user.name}</span>
                <span className="text-[10px] text-gray-500">Active</span>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-xs btn-outline btn-error ml-2"
              >
                Logout
              </button>
            </div>

            {/* Mobile View Profile Icon (Hidden on md and lg) */}
            <div className="md:hidden dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full relative">
                  <Image
                    src={user.image || "https://i.ibb.co.com/4P68Xm8/user.png"}
                    alt={user.name}
                    fill
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li className="menu-title">{user.name}</li>
                <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
              </ul>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;