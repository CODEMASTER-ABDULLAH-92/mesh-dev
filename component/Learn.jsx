"use client";
import React from 'react';
import dsa from "@/assets/dsa.png";
import jsn from "@/assets/jsn.png";
import CardDsa from './CardDsa';

const Learn = () => {
  return (
    <div className="bg-gray-900 text-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-3 sm:mb-4">
            Learn With Us
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            High-quality courses designed to boost your skills and career
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10">
          {/* DSA Course Card */}

          <CardDsa heading={"Data Structures & Algorithms "} lessons={"34 Lessons"} url={"/all"} description={"Master problem-solving techniques with our comprehensive DSA course covering all essential concepts."} image={dsa} btnText={"Beginer"}/>
          
          {/* JavaScript Course Card */}

          <CardDsa heading={"JavaScript Mastery"} lessons={"34 Lessons"} url={"/masterJavaScript"} description={"Deep dive into modern JavaScript concepts, frameworks, and best practices for web development."} image={jsn} btnText={"Beginer"}/>


        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;