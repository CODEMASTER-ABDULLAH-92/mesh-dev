
"use client";
import React from 'react';
import Image from 'next/image';
import dsa from "@/assets/dsa.png";

const Learn = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-10 text-center">
        Learn With Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image 
            src={dsa} 
            alt="Learning resource 1" 
            className="w-full h-auto rounded-md"
            width={500}
            height={300}
          />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image 
            src={dsa}
            alt="Learning resource 2" 
            className="w-full h-auto rounded-md"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Learn;
