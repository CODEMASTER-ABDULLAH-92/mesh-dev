"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-orange-400">
          mash-dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Love-Babbar Sheet
          </a>
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Striver-Sheet
          </a>
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Striver-Pattern-Sheet
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-800">
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Love-Babbar Sheet
          </a>
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Striver-Sheet
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
