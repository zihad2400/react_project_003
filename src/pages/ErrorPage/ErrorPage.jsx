import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 overflow-hidden selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Background Cyber Glow & Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-600/[0.07] rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Glassmorphism Rounded Container */}
      <div className="relative z-10 w-full max-w-lg p-10 sm:p-12 rounded-[2.5rem] bg-slate-900/80 backdrop-blur-2xl border border-slate-800/80 shadow-[0_0_80px_rgba(0,0,0,0.9)] text-center group">
        
        {/* Subtle Inner Glow on Hover */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-emerald-500/[0.03] to-transparent pointer-events-none"></div>

        {/* Floating Cyber Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase shadow-lg shadow-emerald-950/50">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Error 404 Code
        </div>

        {/* Large Neon-Glow Decorative 404 Visual Anchor */}
        <h1 className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-teal-300 to-cyan-500 tracking-tighter select-none drop-shadow-[0_0_35px_rgba(16,185,129,0.3)] animate-pulse">
          404
        </h1>

        {/* Dynamic Title Headers */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Page Not Found
        </h2>

        {/* Clean Responsive Typography Descriptive Text */}
        <p className="mt-3 text-sm text-slate-400 font-medium leading-relaxed max-w-sm mx-auto">
          Oops! The page you are looking for doesn’t exist or has been moved to another dimension. Please head back to safety.
        </p>

        {/* Action Button Navigation Control Module */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 group/btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;