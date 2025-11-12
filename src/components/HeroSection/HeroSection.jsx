import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bg from '/bg.png'
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-110 animate-zoomSlow"
        style={{
          backgroundImage: `url(${bg})`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-yellow-800/60 to-transparent"></div>

      <div className="relative z-10 max-w-3xl text-center px-6 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
         Finance{" "}
          <span className="text-yellow-500 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400 animate-textGradient">
  Made Easy
          </span>{" "}
          —Dreams Made Possible.
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-8">
         “The goal isn’t to have more money — it’s to have more control over your life.”
         <br />Freedom isn’t bought, it’s created through discipline and smart choices
        </p>

        <div className="flex justify-center gap-4">
          <Link to={'/add-transaction'} className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            Get Started <FaArrowRight />
          </Link>

          <button className="px-6 py-3 border border-yellow-50 rounded-full text-white font-semibold hover:bg-white hover:text-yellow-500 transition-all duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
