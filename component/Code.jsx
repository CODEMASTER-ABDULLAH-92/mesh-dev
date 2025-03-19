"use client";
import React, { useRef, useState } from "react";
import Connect from "./Connect";
const Code = ({ text, heading }) => {
  const [copyStatus, setCopyStatus] = useState("Copy");
  const textRef = useRef(null);

  const copyText = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.value);
      setCopyStatus("Copied! ");

      // Reset status after 2 seconds
      setTimeout(() => setCopyStatus("Copy"), 2000);
    }
  };
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-6 text-center">
        {heading}
      </h1>

      {/* Code Editor Box */}
      <div className="max-w-3xl w-full min-h-[600px] sm:h-[550px] bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="p-6">
          {/* Copy Button */}
         

          {/* Code Input Area */}
          <div className="bg-gray-900 p-6 overflow-scroll rounded-lg border border-gray-700 text-lg font-mono leading-relaxed mt-4">
          <div className="flex justify-end relative">
            <button
              onClick={copyText}
              className="py-2 px-4 absolute  bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-md transition-all duration-300"
            >
              {copyStatus}
            </button>
          </div>
            <textarea
              ref={textRef}
              defaultValue={text}
              className="w-full px-2 text-orange-300 min-h-[500px] sm:h-[450px] bg-transparent  outline-none resize-none text-xl overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-600 -tracking-tighter scrollbar-track-gray-800"
            />
          </div>
        </div>
      </div>
      <div>

      </div>

      {/* <Connect/> */}
    </div>
  );
};

export default Code;
