"use client";
import React, { useRef } from 'react';

const STLReferencePage = () => {
  // Refs for each STL component
  const containersRef = useRef(null);
  const iteratorsRef = useRef(null);
  const algorithmsRef = useRef(null);
  const utilitiesRef = useRef(null);
  const arrayRef = useRef(null);
  const vectorRef = useRef(null);
  const dequeRef = useRef(null);
  const listRef = useRef(null);
  const stackRef = useRef(null);
  const queueRef = useRef(null);
  const priorityQueueRef = useRef(null);
  const setRef = useRef(null);
  const mapRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    ref.current.style.color = "#f97316"; // orange-500
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">C++ STL Reference</h1>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => scrollToRef(containersRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            Containers
          </button>
          <button onClick={() => scrollToRef(iteratorsRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            Iterators
          </button>
          <button onClick={() => scrollToRef(algorithmsRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            Algorithms
          </button>
          <button onClick={() => scrollToRef(arrayRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            array
          </button>
          <button onClick={() => scrollToRef(vectorRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            vector
          </button>
          <button onClick={() => scrollToRef(dequeRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            deque
          </button>
        </div>

        {/* STL Sections */}
        <div className="space-y-8">
          {/* Containers Overview */}
          <section ref={containersRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">STL Containers</h2>
            <p className="mb-4">STL provides various container classes to store and manage collections of objects.</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Sequence Containers</h3>
                <ul className="list-disc pl-5">
                  <li><code>vector</code> - Dynamic array</li>
                  <li><code>deque</code> - Double-ended queue</li>
                  <li><code>list</code> - Doubly linked list</li>
                  <li><code>forward_list</code> - Singly linked list</li>
                  <li><code>array</code> - Fixed-size array</li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Associative Containers</h3>
                <ul className="list-disc pl-5">
                  <li><code>set</code> - Unique keys, sorted</li>
                  <li><code>multiset</code> - Allows duplicate keys</li>
                  <li><code>map</code> - Key-value pairs</li>
                  <li><code>multimap</code> - Multiple values per key</li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Container Adapters</h3>
                <ul className="list-disc pl-5">
                  <li><code>stack</code> - LIFO structure</li>
                  <li><code>queue</code> - FIFO structure</li>
                  <li><code>priority_queue</code> - Priority-based</li>
                </ul>
              </div>
            </div>
          </section>

          {/* array */}
          <section ref={arrayRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">array&lt;T,N&gt;</h2>
            <p className="mb-4">Fixed-size array container (safer alternative to C-style arrays).</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <array>
array<int,4> a = {1,2,3,4};
cout << a.empty();    // 0 (false)
cout << a.back();     // 4
cout << a.front();    // 1
cout << a.at(2);      // 3`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>at(index)</code> - Access element with bounds checking</li>
                  <li><code>front()</code>, <code>back()</code> - First/last elements</li>
                  <li><code>size()</code>, <code>empty()</code> - Capacity info</li>
                  <li><code>fill(value)</code> - Set all elements to value</li>
                </ul>
              </div>
            </div>
          </section>

          {/* vector */}
          <section ref={vectorRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">vector&lt;T&gt;</h2>
            <p className="mb-4">Dynamic array with automatic resizing when elements are added/removed.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <vector>
vector<int> arr;
arr.push_back(1);
arr.push_back(2);
cout << arr.at(0);    // 1
cout << arr.size();   // 2
arr.pop_back();
for(int i : arr) {
  cout << i << " ";   // 1
}`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>push_back()</code>, <code>pop_back()</code> - Add/remove from end</li>
                  <li><code>insert()</code>, <code>erase()</code> - Modify at position</li>
                  <li><code>resize()</code>, <code>reserve()</code> - Manage capacity</li>
                  <li><code>clear()</code> - Remove all elements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* deque */}
          <section ref={dequeRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">deque&lt;T&gt;</h2>
            <p className="mb-4">Double-ended queue with efficient insertion/removal at both ends.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <deque>
deque<int> dq;
dq.push_back(10);
dq.push_front(5);
cout << dq.front();   // 5
dq.pop_front();
cout << dq.back();    // 10`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>push_front()</code>, <code>pop_front()</code> - End operations</li>
                  <li><code>push_back()</code>, <code>pop_back()</code> - Front operations</li>
                  <li><code>insert()</code>, <code>erase()</code> - Positional operations</li>
                  <li>Same interface as vector for access methods</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Add more sections for other STL components... */}

        </div>
        
        {/* Back to Top Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default STLReferencePage;