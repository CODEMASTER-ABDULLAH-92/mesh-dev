"use client";
import React, { useState } from "react";

const Code = ({ text = "", heading = "", language = "cpp" }) => {
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopyStatus("Copied!");
    setTimeout(() => setCopyStatus("Copy"), 2000);
  };

  const executeCode = async () => {
    if (isRunning || !text) return;

    setIsRunning(true);
    setOutput("Running...");

    try {
      // Simulate API call (replace with actual implementation)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock response - replace with actual API call
      const mockResponse = {
        output: text.includes("error")
          ? "Error: Sample error message"
          : "Execution completed successfully\n" +
            "Output: " +
            text.split("\n").length +
            " lines processed",
      };

      setOutput(mockResponse.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-2">
            {heading || "Code Playground"}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            {text ? "Edit and execute your code" : "Paste your code to begin"}
          </p>
        </div>

        {/* Code Container */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700">
          {/* Toolbar */}
          <div className="flex justify-between items-center p-3 bg-gray-900/50 border-b border-gray-700">
            <div className="flex items-center space-x-1.5">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm text-gray-400 hidden sm:inline">
                {language.toUpperCase()}
              </span>
            </div> 
            </div>
            <div className="flex space-x-2">
              <button
                onClick={copyToClipboard}
                disabled={isRunning || !text}
                className={`px-3 py-1.5 text-sm rounded-md font-medium transition-all flex items-center ${
                  copyStatus === "Copied!"
                    ? "bg-green-600/90 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                } ${isRunning || !text ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {copyStatus}
              </button>
              <button
                onClick={executeCode}
                disabled={isRunning || !text}
                className={`px-3 py-1.5 text-sm rounded-md font-medium transition-all flex items-center ${
                  isRunning
                    ? "bg-amber-600/90 text-white cursor-wait"
                    : "bg-blue-600/90 hover:bg-blue-500/90 text-white"
                } ${!text ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isRunning ? "Running..." : "Run Code"}
              </button>
            </div>
          </div>

          {/* Code Display */}
          <div className="p-4 overflow-auto -tracking-tighter max-h-[800px]">
            {text ? (
              <pre className="font-mono text-lg sm:text-[17px] leading-relaxed whitespace-pre-wrap text-gray-100">
                {text}
              </pre>
            ) : (
              <div className="text-center py-8 text-gray-400 italic">
                No code to display
              </div>
            )}
          </div>

          {/* Output Section */}
          <div className="border-t border-gray-700 bg-gray-900/30">
            <div className="px-4 py-3 flex items-center bg-gray-900/50">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-300">Output</span>
            </div>
            <div className="p-4 min-h-24">
              <pre
                className={`font-mono text-sm whitespace-pre-wrap ${
                  output.startsWith("Error")
                    ? "text-red-400"
                    : output === "Running..."
                    ? "text-amber-400"
                    : "text-green-400"
                }`}
              >
                {output ||
                  (text
                    ? "Click 'Run Code' to see results"
                    : "Add code to execute")}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            Note: This is a demo interface. Replace with actual API integration
            for real execution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;
