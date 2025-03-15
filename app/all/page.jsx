"use client";
import asset from "@/assets/data";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {

  const [easy,setEasy] = useState([]);

  const easyType = ()=>{
      const easy = asset.filter((item) => item.easy === true);
      setEasy(easy);
  }
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      {/* Title */}
    

      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-10 text-center">
       All DSA Questions
      </h1>

      {/* Container with responsive layout */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">

        {/* Sidebar Filter (Stacked on small screens, row on large screens) */}
        <div className="w-full h-full md:w-[390px] rounded-md p-4 bg-gray-700 text-white">
          {/* Question Type Section */}
          <h1 className="text-xl font-mono font-medium mb-2">Question Type:</h1>
          <div className="space-y-2">
            {["Easy", "Medium", "Hard"].map((type, index) => (
              <label key={index} htmlFor={type.toLowerCase()} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id={type.toLowerCase()} className="w-[18px] h-[18px] accent-blue-500" />
                {type}
              </label>

              
            ))}
          </div>

          {/* Sheets Section */}
          <h1 className="text-xl font-mono font-medium mt-4 mb-2">Sheets:</h1>
          <div className="space-y-2">
            {["Love Babbar", "Striver", "Striver Pattern"].map((sheet, index) => (
              <label key={index} htmlFor={sheet.toLowerCase().replace(" ", "-")} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id={sheet.toLowerCase().replace(" ", "-")} className="w-[18px] h-[18px] accent-green-500" />
                {sheet}
              </label>
            ))}
          </div>
          <h1 className="text-xl font-mono font-medium mt-4 mb-2">DSA:</h1>
          <div className="space-y-2">
            {["Array", "String", "HashMap"].map((sheet, index) => (
              <label key={index} htmlFor={sheet.toLowerCase().replace(" ", "-")} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id={sheet.toLowerCase().replace(" ", "-")} className="w-[18px] h-[18px] accent-green-500" />
                {sheet}
              </label>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div className="w-full bg-gray-800 rounded-lg shadow-lg p-4">
          {asset.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 border-b border-gray-700 hover:bg-gray-700 rounded-lg transition-all"
            >
              <HelpCircle className="text-orange-400" size={24} />
              <Link href={item._id} className="text-lg font-medium">{item.heading}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
