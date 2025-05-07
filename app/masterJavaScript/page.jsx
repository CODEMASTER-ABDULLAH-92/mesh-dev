"use client";
import React from 'react';
import Image from 'next/image';
import dataType from "@/assets/data.png";
import array from "@/assets/arrayJs.png";
import strings from "@/assets/stringsJs.png";
import othermethods from "@/assets/otherMethods.png";
import Link from 'next/link';
import CardDsa from '@/component/CardDsa';

const JavaScriptConcepts = () => {
  const concepts = [
    {
      title: "JavaScript Data Types",
      description: "Learn about primitive and reference data types in JavaScript like strings, numbers, booleans, objects, arrays, and more.",
      image: dataType,
      href: "/data-types",
      lessons: "18 Lessons",
      level: "Beginner",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "JavaScript Arrays",
      description: "Master JavaScript arrays and methods like map, filter, reduce, push, pop, and more to manipulate collections of data.",
      image: array,
      href: "/array-methods",
      lessons: "24 Lessons",
      level: "Intermediate",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "JavaScript Strings",
      description: "Explore JavaScript string methods like slice, replace, toUpperCase, toLowerCase, split, and more for text manipulation.",
      image: strings,
      href: "/learn/strings",
      lessons: "20 Lessons",
      level: "Intermediate",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Other Useful Methods",
      description: "Dive into other essential JavaScript methods for objects, numbers, and utility functions for efficient coding.",
      image: othermethods,
      href: "/learn/others",
      lessons: "15 Lessons",
      level: "Advanced",
      gradient: "from-purple-600 to-indigo-500"
    }
  ];

  return (
    <div className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
            JavaScript Concepts
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dive into fundamental and advanced concepts of JavaScript to strengthen your frontend skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:gap-8">
          {concepts.map((concept, index) => (
            <CardDsa 
              key={index}
              url={concept.href}
              btnText={concept.level}
              lessons={concept.lessons}
              image={concept.image}
              heading={concept.title}
              description={concept.description}
              gradient={concept.gradient}
            />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-medium px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105">
            View All Concepts
          </button>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptConcepts;