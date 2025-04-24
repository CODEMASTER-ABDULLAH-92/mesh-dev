"use client";
import React, { useRef } from 'react';
import Link from 'next/link';

const ArrayMethodsPage = () => {
  // Refs for each section
  const iterationRef = useRef(null);
  const mutationRef = useRef(null);
  const accessorRef = useRef(null);
  const searchRef = useRef(null);
  const transformationRef = useRef(null);
  const bestPracticesRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">JavaScript Array Methods</h1>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => scrollToRef(iterationRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Iteration Methods
          </button>
          <button 
            onClick={() => scrollToRef(mutationRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Mutation Methods
          </button>
          <button 
            onClick={() => scrollToRef(accessorRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Accessor Methods
          </button>
          <button 
            onClick={() => scrollToRef(searchRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Search Methods
          </button>
          <button 
            onClick={() => scrollToRef(transformationRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Transformation Methods
          </button>
          <button 
            onClick={() => scrollToRef(bestPracticesRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Best Practices
          </button>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Iteration Methods Section */}
          <section ref={iterationRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Iteration Methods</h2>
            <div className="space-y-4">
              {/* forEach */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. forEach()</h3>
                <p>Executes a provided function once for each array element.</p>
                <p className="font-semibold mt-2">Main Points:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Does not return a new array</li>
                  <li>Cannot break out of the loop (no equivalent to break)</li>
                  <li>Used for side effects rather than transformations</li>
                </ul>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [1, 2, 3];\nnumbers.forEach(num => console.log(num * 2));\n// Output: 2, 4, 6`}</code>
                </pre>
              </div>

              {/* map */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. map()</h3>
                <p>Creates a new array with the results of calling a provided function on every element.</p>
                <p className="font-semibold mt-2">Main Points:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Returns a new array (does not mutate original)</li>
                  <li>Same length as original array</li>
                  <li>Used for transforming data</li>
                </ul>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\n// doubled: [2, 4, 6]`}</code>
                </pre>
              </div>

              {/* filter */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">3. filter()</h3>
                <p>Creates a new array with all elements that pass the test implemented by the provided function.</p>
                <p className="font-semibold mt-2">Main Points:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Returns a new array (does not mutate original)</li>
                  <li>Length may be different from original</li>
                  <li>Used for selecting subsets of data</li>
                </ul>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(num => num % 2 === 0);\n// evens: [2, 4]`}</code>
                </pre>
              </div>

              {/* reduce */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">4. reduce()</h3>
                <p>Executes a reducer function on each element, resulting in a single output value.</p>
                <p className="font-semibold mt-2">Main Points:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Returns a single value (not an array)</li>
                  <li>Can be used for summing, flattening, grouping, etc.</li>
                  <li>Takes an initial value (optional)</li>
                </ul>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\n// sum: 10`}</code>
                </pre>
              </div>

              {/* some */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">5. some()</h3>
                <p>Tests whether at least one element in the array passes the test implemented by the provided function.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [1, 2, 3, 4, 5];\nconst hasEven = numbers.some(num => num % 2 === 0);\n// hasEven: true`}</code>
                </pre>
              </div>

              {/* every */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">6. every()</h3>
                <p>Tests whether all elements in the array pass the test implemented by the provided function.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every(num => num % 2 === 0);\n// allEven: true`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Mutation Methods Section */}
          <section ref={mutationRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Mutation Methods</h2>
            <div className="space-y-4">
              {/* push */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. push()</h3>
                <p>Adds one or more elements to the end of an array and returns the new length.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const fruits = ['apple', 'banana'];\nfruits.push('orange');\n// fruits: ['apple', 'banana', 'orange']`}</code>
                </pre>
              </div>

              {/* pop */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. pop()</h3>
                <p>Removes the last element from an array and returns that element.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const fruits = ['apple', 'banana', 'orange'];\nconst last = fruits.pop();\n// last: 'orange'\n// fruits: ['apple', 'banana']`}</code>
                </pre>
              </div>

              {/* shift */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">3. shift()</h3>
                <p>Removes the first element from an array and returns that element.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const fruits = ['apple', 'banana', 'orange'];\nconst first = fruits.shift();\n// first: 'apple'\n// fruits: ['banana', 'orange']`}</code>
                </pre>
              </div>

              {/* unshift */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">4. unshift()</h3>
                <p>Adds one or more elements to the beginning of an array and returns the new length.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const fruits = ['banana', 'orange'];\nfruits.unshift('apple');\n// fruits: ['apple', 'banana', 'orange']`}</code>
                </pre>
              </div>

              {/* splice */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">5. splice()</h3>
                <p>Changes the contents of an array by removing or replacing existing elements and/or adding new elements.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const fruits = ['apple', 'banana', 'orange'];\n// Remove 1 element at index 1 and insert 'kiwi'\nconst removed = fruits.splice(1, 1, 'kiwi');\n// removed: ['banana']\n// fruits: ['apple', 'kiwi', 'orange']`}</code>
                </pre>
              </div>

              {/* reverse */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">6. reverse()</h3>
                <p>Reverses the order of the elements in an array.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [1, 2, 3];\nnumbers.reverse();\n// numbers: [3, 2, 1]`}</code>
                </pre>
              </div>

              {/* sort */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">7. sort()</h3>
                <p>Sorts the elements of an array in place and returns the sorted array.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [3, 1, 4, 2];\nnumbers.sort((a, b) => a - b); // ascending\n// numbers: [1, 2, 3, 4]\n\nconst fruits = ['banana', 'apple', 'orange'];\nfruits.sort();\n// fruits: ['apple', 'banana', 'orange']`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Accessor Methods Section */}
          <section ref={accessorRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Accessor Methods</h2>
            <div className="space-y-4">
              {/* concat */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. concat()</h3>
                <p>Returns a new array that is the combination of two or more arrays.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst combined = arr1.concat(arr2);\n// combined: [1, 2, 3, 4]`}</code>
                </pre>
              </div>

              {/* slice */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. slice()</h3>
                <p>Returns a shallow copy of a portion of an array into a new array.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const fruits = ['apple', 'banana', 'orange', 'kiwi'];\nconst citrus = fruits.slice(1, 3);\n// citrus: ['banana', 'orange']`}</code>
                </pre>
              </div>

              {/* join */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">3. join()</h3>
                <p>Joins all elements of an array into a string.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const elements = ['Fire', 'Air', 'Water'];\nconst joined = elements.join(' - ');\n// joined: "Fire - Air - Water"`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Search Methods Section */}
          <section ref={searchRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Search Methods</h2>
            <div className="space-y-4">
              {/* indexOf */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. indexOf()</h3>
                <p>Returns the first index at which a given element can be found in the array, or -1 if not present.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const fruits = ['apple', 'banana', 'orange'];\nconst index = fruits.indexOf('banana');\n// index: 1`}</code>
                </pre>
              </div>

              {/* lastIndexOf */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. lastIndexOf()</h3>
                <p>Returns the last index at which a given element can be found in the array, or -1 if not present.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [2, 5, 9, 2];\nconst lastIndex = numbers.lastIndexOf(2);\n// lastIndex: 3`}</code>
                </pre>
              </div>

              {/* includes */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">3. includes()</h3>
                <p>Determines whether an array includes a certain value among its entries.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const fruits = ['apple', 'banana', 'orange'];\nconst hasBanana = fruits.includes('banana');\n// hasBanana: true`}</code>
                </pre>
              </div>

              {/* find */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">4. find()</h3>
                <p>Returns the first element in the array that satisfies the provided testing function.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.find(num => num > 10);\n// found: 12`}</code>
                </pre>
              </div>

              {/* findIndex */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">5. findIndex()</h3>
                <p>Returns the index of the first element in the array that satisfies the provided testing function.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const numbers = [5, 12, 8, 130, 44];\nconst index = numbers.findIndex(num => num > 10);\n// index: 1`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Transformation Methods Section */}
          <section ref={transformationRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Transformation Methods</h2>
            <div className="space-y-4">
              {/* flat */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. flat()</h3>
                <p>Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const arr = [1, 2, [3, 4, [5, 6]]];\nconst flattened = arr.flat(2);\n// flattened: [1, 2, 3, 4, 5, 6]`}</code>
                </pre>
              </div>

              {/* flatMap */}
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. flatMap()</h3>
                <p>First maps each element using a mapping function, then flattens the result into a new array.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const arr = [1, 2, 3];\nconst result = arr.flatMap(x => [x, x * 2]);\n// result: [1, 2, 2, 4, 3, 6]`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section ref={bestPracticesRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. Prefer immutable methods</h3>
                <p>Use methods that don't mutate the original array (map, filter, slice, etc.) when possible.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`// Good (immutable)\nconst newArr = arr.map(x => x * 2);\n\n// Avoid (mutates)\narr.forEach((x, i) => arr[i] = x * 2);`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. Chain methods when appropriate</h3>
                <p>Method chaining can make code more readable.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const result = numbers\n  .filter(n => n > 5)\n  .map(n => n * 2)\n  .reduce((sum, n) => sum + n, 0);`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">3. Use the right method for the job</h3>
                <p>Choose the most appropriate method for your use case.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`// Need a new array? Use map\n// Need to filter? Use filter\n// Need a single value? Use reduce\n// Just need to iterate? Use forEach`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">4. Consider performance for large arrays</h3>
                <p>For very large arrays, some methods may be more performant than others.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`// For simple existence check, includes is faster than find\narr.includes(value);\n\n// For large transformations, for loops might be faster than map`}</code>
                </pre>
              </div>
            </div>
          </section>
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

export default ArrayMethodsPage;