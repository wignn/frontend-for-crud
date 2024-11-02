"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; 
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";


interface User {
  id: number;
  name: string;
  email: string;
  profile: { avatar: string; sampul: string };
}

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/icon/Error_Symbol2.png" 
            alt="Logo"
            width={40} 
            height={40} 
            className="h-10 w-10"
          />
          <Link href="/" className="text-xl font-bold">
            wignn
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <Link href="/dashboard" className="hover:text-gray-400">
            Novel
          </Link>
          <Link href="/bookmark" className="hover:text-gray-400">
            Bookmark
          </Link>
        </div>

        {user && (
          <div className="relative z-50">
            <img
              src={user?.profile.avatar }
              alt="Avatar"
              className="hidden md:block h-10 w-10 rounded-full cursor-pointer" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-2">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  {user?.name}
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  {user?.email}
                </a>
                <Link
                  href="/profile/setting"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Settings
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        )}

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-800">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-800">
            About
          </Link>
          <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-800">
            Novel
          </Link>
          <Link href="/profile" className="block px-4 py-2 hover:bg-gray-800">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
