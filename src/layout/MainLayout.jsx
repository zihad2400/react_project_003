import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    // Global App Matrix Body Wrapper (Never bleeds color on deep viewports)
    <div className="min-h-screen bg-[#070A12] text-gray-100 flex flex-col antialiased selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden">
      
      {/* Absolute Global Ambient Light Engine (Mesh Backdrops) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-emerald-500/[0.03] via-teal-500/[0.01] to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      {/* Top Main Navigation Header Panel Context Area */}
      <header className="relative z-50">
        <Navbar />
      </header>

      {/* Primary Workspace Viewport Container Frame Layer */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 animate-[fadeIn_0.5s_ease-out]">
        <Outlet />
      </main>

      {/* Core Luxury Mini Footer Alignment Symmetry Section */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-900 mt-20 relative z-10 text-center">
        <p className="text-xs font-bold text-gray-600 tracking-widest uppercase">
          © {new Date().getFullYear()} Book<span className="text-emerald-500">Vibe</span> Studio Engine. All Matrix Cleared.
        </p>
      </footer>
      
    </div>
  );
};

export default MainLayout;