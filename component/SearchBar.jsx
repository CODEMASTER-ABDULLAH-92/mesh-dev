"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const SearchSection = () => {
  const [query, setQuery] = useState("");

  return (
    <div className=" bg-gray-900 text-white flex flex-col items-center px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-6 text-center">
        Explore Content
      </h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here..."
          className="w-full p-4 pr-12 bg-gray-800 text-orange-300 text-lg border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 transition"
        />
        <Search className="absolute right-4 top-4 text-orange-400" size={24} />
      </div>

      {/* Dummy Text */}
      <div className="mt-8 max-w-3xl text-lg text-gray-300 leading-relaxed text-center">
        Welcome to <span className="text-orange-400 font-semibold">mash-dev</span>, 
        your ultimate platform for learning and coding resources. Discover guides, 
        problem-solving strategies, and in-depth articles tailored to help you excel 
        in Data Structures, Algorithms, and Web Development.
      </div>
      <Link
      href="/lets-started"
      className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
    >
      Let's Get Started
    </Link>
    </div>
  );
};

export default SearchSection;
