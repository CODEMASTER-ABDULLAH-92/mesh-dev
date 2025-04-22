"use client";
import React, { useState } from "react";

const AboutFeedback = () => {


  return (
    <div className="bg-gray-900 text-white px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
            Got Feedback or Suggestions?
          </h2>
          <p className="text-gray-300 mt-2">
            Tell us how we can improve or connect with us!
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg">
          <button

            className="w-full text-left px-6 py-5 font-semibold text-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 rounded-t-xl hover:opacity-90 transition-all"
          >
Share Your Thoughts
          </button>


            <div className="px-6 py-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">🔧 Found an Error?</h3>
                <p className="text-gray-300">
                  Report bugs or mistakes you've come across while using the platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">🚀 Suggest Optimal Solutions</h3>
                <p className="text-gray-300">
                  Share better or more efficient approaches for solving Data Structures & Algorithms questions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">💡 Contribute Your Ideas</h3>
                <p className="text-gray-300">
                  We're always open to improving our platform with your awesome ideas!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">🤝 Connect with Me</h3>
                <p className="text-gray-300 mb-2">
                  I'd love to hear your thoughts. Reach out to me personally:
                </p>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p><span className="font-semibold">Name:</span> Muhammad Abdullah</p>
                  <p>
                    <span className="font-semibold">LinkedIn:</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/muhammadabdullahpeerzada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 underline hover:text-yellow-500 transition-colors"
                    >
                      Connect with me on LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default AboutFeedback;
