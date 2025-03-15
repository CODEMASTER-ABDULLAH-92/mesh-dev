"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";

const questions = [
  "What is an array?",
  "How does a linked list work?",
  "What is the difference between Stack and Queue?",
  "Explain Binary Search Algorithm.",
  "What is Dynamic Programming?",
  "How does Recursion work?",
  "What is the difference between BFS and DFS?",
  "Explain Hashing and its applications.",
  "What is a Heap data structure?",
  "How does a Trie work?",
  "What are Graphs and their types?",
  "Explain Sorting Algorithms with examples.",
  "What is Greedy Algorithm?",
  "What is Backtracking in DSA?",
  "Explain Divide and Conquer approach.",
];

const QUESTIONS_PER_PAGE = 5;

const QuestionList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

  // Get questions for the current page
  const indexOfLastQuestion = currentPage * QUESTIONS_PER_PAGE;
  const indexOfFirstQuestion = indexOfLastQuestion - QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-10 text-center">
        DSA Questions
      </h1>

      {/* Questions List */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg">
        {currentQuestions.map((question, index) => (
          <div key={index} className="flex items-center gap-3 p-4 border-b border-gray-700">
            <HelpCircle className="text-orange-400" size={24} />
            <p className="text-lg">{question}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default QuestionList;
