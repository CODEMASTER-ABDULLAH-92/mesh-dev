"use client";
import { FaClipboardList, FaDatabase, FaStackOverflow, FaLayerGroup, FaCodeBranch, FaProjectDiagram, FaInfinity, FaBrain, FaSort, FaChartLine, FaSearch, FaCubes, FaTh, FaBraille, FaHashtag, FaNetworkWired, FaTree, FaSitemap, FaPuzzlePiece, FaLink, FaCube } from "react-icons/fa";

const dsaTopics = [
  { name: "Patterns", icon: <FaClipboardList size={32} className="text-orange-400" /> },
  { name: "Array", icon: <FaDatabase size={32} className="text-orange-400" /> },
  { name: "Stack", icon: <FaStackOverflow size={32} className="text-orange-400" /> },
  { name: "Queue", icon: <FaLayerGroup size={32} className="text-orange-400" /> },
  { name: "Linked List", icon: <FaCodeBranch size={32} className="text-orange-400" /> },
  { name: "Backtracking", icon: <FaProjectDiagram size={32} className="text-orange-400" /> },
  { name: "Dynamic Programming", icon: <FaInfinity size={32} className="text-orange-400" /> },
  { name: "Recursion", icon: <FaBrain size={32} className="text-orange-400" /> },
  { name: "Sorting", icon: <FaSort size={32} className="text-orange-400" /> },
  { name: "Greedy Algorithm", icon: <FaChartLine size={32} className="text-orange-400" /> },
  { name: "Searching", icon: <FaSearch size={32} className="text-orange-400" /> },
  { name: "Divide & Conquer", icon: <FaCubes size={32} className="text-orange-400" /> },
  { name: "Pattern Searching", icon: <FaTh size={32} className="text-orange-400" /> },
  { name: "Matrix", icon: <FaBraille size={32} className="text-orange-400" /> },
  { name: "String", icon: <FaHashtag size={32} className="text-orange-400" /> },
  { name: "Graph", icon: <FaNetworkWired size={32} className="text-orange-400" /> },
  { name: "Trees", icon: <FaTree size={32} className="text-orange-400" /> },
  { name: "Heap", icon: <FaSitemap size={32} className="text-orange-400" /> },
  { name: "Trie", icon: <FaPuzzlePiece size={32} className="text-orange-400" /> },
  { name: "Segment Tree", icon: <FaTree size={32} className="text-orange-400" /> },
  { name: "Binary Indexed Tree", icon: <FaTree size={32} className="text-orange-400" /> },
  { name: "Disjoint Set", icon: <FaLink size={32} className="text-orange-400" /> },
  { name: "Advanced Data Structures", icon: <FaCube size={32} className="text-orange-400" /> }
];

const DSAComponent = () => {
  return (
    <div className=" bg-gray-900 text-white flex flex-col items-center px-6 py-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-10 text-center">
        Data Structures & Algorithms
      </h1>

      {/* Grid of DSA Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
        {dsaTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            {topic.icon}
            <h3 className="mt-3 text-lg font-semibold text-orange-300">{topic.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSAComponent;
