"use client";
import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Link from "next/link";


const Striver = () => {

  const patterns = [
    {
      title: 'Pattern 1',
      code: `* * * * *
* * * * *
* * * * *
* * * * *
* * * * *`,
link:'/squarePattern',
    },
    {
      title: 'Pattern 2',
      code: `* 
* * 
* * * 
* * * * 
* * * * *`,
link:'/right-Angled-Triangle-Pattern',
    },
    {
      title: 'Pattern 3',
      code: `1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`,
link:'/number-Pyramid-Pattern'
    },
    {
      title: 'Pattern 4',
      code: `1
2 2
3 3 3
4 4 4 4
5 5 5 5 5`,
link:'/repeated-Number-Triangle-Pattern',
    },
    {
      link:'/repeated-Number-Triangle-Pattern',
      title: 'Pattern 5',
      code: `* * * * * 
* * * * 
* * * 
* * 
*`,
    },
    {
      link:"/InvertedRight-AngledTrianglePattern",
      title: 'Pattern 6',
      code: `1 2 3 4 5
1 2 3 4
1 2 3
1 2
1`,
    },
    {
      link:"/pyramidPattern",
      title: 'Pattern 7',
      code: `        
      *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *`,
    },
    {
      link:"/Inverted-Pyramid-Pattern2",
      title: 'Pattern 8',
      code: `  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *`,
    },
    {
      link:"/diamondPattern",
      title: 'Pattern 9',
      code: `         * 
       * * * 
     * * * * * 
   * * * * * * * 
 * * * * * * * * * 
   * * * * * * * 
     * * * * * 
       * * * 
         *`,
    },

    {
      link:"/mirroredNumberPyramidPattern",
      title: 'Pattern 10',
      code: `* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
*`,
    },
    {
      link:"/BinaryNumberTrianglePattern",
      title: 'Pattern 11',
      code: `1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1`,
    },
    {
      link:"/Hourglass-Pattern",
      title: 'Pattern 12',
      code: `1      1
12    12
123  123
12341234`,
    },

    {
      link:"/floydTriangle",
      title: 'Pattern 13',
      code: `1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15`,
    },
    {
      link:"/AlphabetPyramidPattern",
      title: 'Pattern 14',
      code: `A 
A B 
A B C 
A B C D 
A B C D E`,
    },
    {
      link:"/invertedAlphabetPyramidPattern",
      title: 'Pattern 15',
      code: `
A B C D E 
A B C D 
A B C 
A B 
A `,
    },
    {
      link:"/reverseAlphabetTrianglePattern",
      title: 'Pattern 16',
      code: `E 
E D 
E D C 
E D C B 
E D C B A`,
    },
    {
      link:"/symmetricAlphabetPyramid",
      title: 'Pattern 17',
      code: `
          A
        A B A
      A B C B A   
    A B C D C B A`,
    },
    {
      link:"/AlphabetStaircasePattern",
      title: 'Pattern 18',
      code: `E
D E
C D E
B C D E
A B C D E`,
    },
    {
      link:"/sandglassPattern",
      title: 'Pattern 19',
      code: `* * * * * * * * * * 
* * * *     * * * * 
* * *         * * * 
* *             * * 
*                 * 
*                 * 
* *             * * 
* * *         * * * 
* * * *     * * * * 
* * * * * * * * * * `,
    },
    {
      link:"/ButterflyPattern",
      title: 'Pattern 20',
      code: `
*                 * 
* *             * * 
* * *         * * * 
* * * *     * * * * 
* * * * * * * * * * 
* * * *     * * * * 
* * *         * * * 
* *             * * 
*                 * `,
    },
    {
      link:"/HollowSquarePattern",
      title: 'Pattern 21',
      code: `* * * * * * * * * * * * * * * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           *  
* * * * * * * * * * * * * * *`,
    },
    {
      link:"/NumberBoxPattern",
      title: 'Pattern 22',
      code: `4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4`,
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center px-4 py-10">
      <Head>
        <title>Striver Pattern Sheet | Masah-Dev</title>
      </Head>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-10">
        Striver Pattern Practice
      </h1>

      {patterns.map((pattern, index) => (
        <div
          key={index}
          className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 mt-10"
        >
          <div className="p-6">
            <h2 className="text-2xl hover:text-purple-400 cursor-pointer sm:text-3xl font-semibold mb-4 text-center text-gray-100">
              {pattern.title}
            </h2>
            <div className="bg-gray-900 p-6 rounded-lg flex  justify-center items-center border border-gray-700 text-lg font-mono overflow-scroll -tracking-tighter">
              <ReactMarkdown>{`\`\`\`\n${pattern.code}\n\`\`\``}</ReactMarkdown>
            </div>
          </div>
          <div className="mt-4 pb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* <Link href="/compiler">
              <span className="py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer">
                Practice
              </span>
            </Link> */}
            <Link href={pattern.link} >
              <span className="py-2 px-6 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer">
                Explanation
              </span>
            </Link>
            {/* <button className="py-2 px-6 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              Video Solution
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Striver;
