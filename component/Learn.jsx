"use client";
import React from 'react';
import Image from 'next/image';
import dsa from "@/assets/dsa.png";
import js from "@/assets/js.jpeg";
import Link from 'next/link';

const Learn = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-16 sm:py-20">
      <div className="max-w-7xl  mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
            Learn With Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            High-quality courses designed to boost your skills and career
          </p>
        </div>
        <div className="flex justify-evenly items-center min-w-7xl gap-4">
          {/* DSA Course Card */}
          <div className="bg-gradient-to-br w-[32%] from-purple-500 to-blue-500 p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gray-800 p-4 rounded-xl  h-[600px]">
              <div className="relative rounded-2xl p-4 h-[370px]">
                <Link href="/all">
                <Image 
                  src={dsa} 
                  alt="Data Structures & Algorithms"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                  />
                  </Link>
                <div className="absolute bottom-0 left-0 right-0" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Intermediate
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Data Structures & Algorithms</h3>
                <p className="text-gray-300 mb-4">
                  Master problem-solving techniques with our comprehensive DSA course covering all essential concepts.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    120 Lessons
                  </div>
                  <Link href="/all"  className="bg-gradient-to-r hover:opacity-90 transition-opacity from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Start Learning
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* JavaScript Course Card */}
          <div className="bg-gradient-to-br w-[32%] from-yellow-400 to-orange-500 p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            
            
          <div className="bg-gray-800 p-4 rounded-xl  h-[600px]">
              <div className="relative rounded-2xl p-4 h-[370px]">
                <Image 
                  src={js} 
                  alt="Data Structures & Algorithms"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Intermediate
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Data Structures & Algorithms</h3>
                <p className="text-gray-300 mb-4">
                  Master problem-solving techniques with our comprehensive DSA course covering all essential concepts.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    120 Lessons
                  </div>
                  <button className="bg-gradient-to-r hover:opacity-90 transition-opacity from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>





          </div>

        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-medium px-6 py-3 rounded-lg transition-all duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;