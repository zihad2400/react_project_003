import React from "react";
import { Link } from "react-router"; // React router structure check configuration
import bookImg from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0F19] via-[#0E1424] to-[#070A12] rounded-[2rem] p-8 sm:p-12 lg:p-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 border border-gray-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] my-8 max-w-7xl mx-auto group/banner">
      
      {/* Dynamic Ambient Blur Mesh Background Controls */}
      <div className="absolute top-[-30%] left-[-10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none group-hover/banner:bg-emerald-500/15 transition-all duration-700"></div>
      <div className="absolute bottom-[-30%] right-[-10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none group-hover/banner:bg-teal-500/15 transition-all duration-700"></div>

      {/* Grid Text Content Wrappers */}
      <div className="flex-1 space-y-6 text-center lg:text-left relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
          Books to freshen up <br className="hidden lg:block"/> your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 font-black drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]">
            bookshelf
          </span>
        </h1>
        
        <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg font-medium leading-relaxed">
          Explore trending stories, keep track of your reading goals, and curate your aesthetic digital library seamlessly in real-time.
        </p>
        
        <div className="pt-4">
          <Link 
            to="/books" 
            className="inline-block px-9 py-4 text-base font-extrabold text-[#070A12] bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-400/50 hover:scale-[1.03] active:scale-95 transition-all duration-300 transform cursor-pointer"
          >
            View The List
          </Link>
        </div>
      </div>

      {/* Floating Image Section Component with Neon Ambient Shadow Glow */}
      <div className="flex-1 flex justify-center max-w-xs sm:max-w-sm lg:max-w-none relative z-10">
        <div className="relative group/img">
          {/* Neon Soft Back-Glow Ring Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-2xl blur-3xl opacity-20 group-hover/img:opacity-45 transition-all duration-700 scale-95 group-hover/img:scale-105"></div>
          
          <img 
            src={bookImg} 
            alt="Book Vibe Banner Hero" 
            className="w-4/5 sm:w-64 lg:w-72 mx-auto object-contain rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] transform rotate-3 group-hover/img:rotate-0 group-hover/img:scale-105 transition-all duration-500 border-4 border-gray-800/80 relative z-10 animate-[bounce_4.5s_ease-in-out_infinite]"
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;