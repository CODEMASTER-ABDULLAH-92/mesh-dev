import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dsa from "@/assets/dsa.png"
const CardDsa = ({image,heading,description,lessons,btnText,url}) => {
  return (
    <div>
       <div className=" max-w-[400px] bg-gradient-to-br from-purple-500 to-blue-500 p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gray-800 p-4 rounded-xl h-full min-h-[500px] sm:min-h-[550px] lg:h-[600px]">
              <div className="relative rounded-2xl p-4 h-[370px]">
                <Link href="/all">
                  <Image 
                    src={image} 
                    alt="Data Structures & Algorithms"
                    fill
                    className="object-center sm:object-contain rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
{btnText}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {/* Data Structures & Algorithms */}
                  {heading}
                </h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  {/* Master problem-solving techniques with our comprehensive DSA course covering all essential concepts. */}
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {lessons}
                    {/* 120 Lessons */}
                  </div>
                  <Link href={url} className="bg-gradient-to-r hover:opacity-90 transition-opacity from-orange-500 to-yellow-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-center">
                    Start Learning
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CardDsa
