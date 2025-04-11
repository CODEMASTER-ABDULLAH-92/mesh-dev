"use client";
import React, { useState } from "react";

const Code = ({ text, heading }) => {
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [output, setOutput] = useState("");

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopyStatus("Copied!");
    setTimeout(() => setCopyStatus("Copy"), 2000);
  };

  const runCode = async () => {
    setOutput("Running...");

    const response = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        script: text,
        language: "cpp",
        versionIndex: "4",
        clientId: "your_client_id",
        clientSecret: "your_client_secret",
      }),
    });

    const data = await response.json();
    setOutput(data.output || "Error executing code");
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center px-4 py-10">
     <div>
     <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-6 text-center">
        {heading}
      </h1>

      <div className="max-w-3xl w-full  sm:h-[550px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
        <div className="flex justify-end gap-2">
          <button
            onClick={copyText}
            className="py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-md transition-all duration-300"
          >
            {copyStatus}
          </button>
          <button
            onClick={runCode}
            className="py-2 px-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold shadow-md transition-all duration-300"
          >
            Run
          </button>
        </div>

        {/* Code Display (Read-Only) */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-lg font-mono leading-relaxed mt-4 text-orange-300 whitespace-pre-wrap overflow-x-auto">
          {text}
        </div>

        {/* Output Section */}
        <div className="mt-4 p-4 bg-black text-green-400 rounded-lg min-h-[100px] border border-gray-700">
          <h2 className="font-bold text-white mb-2">Output:</h2>
          <pre>{output || "Click Run to execute the code"}</pre>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Code;
