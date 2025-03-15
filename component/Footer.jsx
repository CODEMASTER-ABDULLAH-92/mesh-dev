"use client";
import { Facebook, Twitter, Github } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Brand Name */}
        <h2 className="text-2xl font-bold text-orange-400 mb-2">mash-dev</h2>
        
        {/* Links */}
        <div className="flex space-x-6 text-lg font-semibold">
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Love-Babbar Sheet
          </a>
          <a href="#" className="text-orange-300 hover:text-orange-500 transition">
            Striver-Sheet
          </a>
        </div>

        {/* Social Icons (Optional) */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-orange-400 hover:text-orange-500 transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-orange-400 hover:text-orange-500 transition">
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
className="text-orange-400 hover:text-orange-500 transition"
          >
            <FaLinkedin size={24} /> 
          </a>
          <a
            href="https://abdullah-kohl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
className="text-orange-400 hover:text-orange-500 transition"

          >
            <FaGlobe size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} mash-dev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
