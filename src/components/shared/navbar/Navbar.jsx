import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Dynamic Navigation Setup Route Target Paths
  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Listed Books", path: "/books" },
    { label: "Pages to Read", path: "/pages-to-read" },
  ];

  const links = navigationItems.map((item, index) => (
    <li key={index} className="list-none">
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `relative px-5 py-2.5 rounded-xl font-bold tracking-wide text-sm block md:inline-block transition-all duration-300 transform active:scale-95
          ${
            isActive
              ? "text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 shadow-lg shadow-emerald-500/20 scale-105 border border-emerald-400/30"
              : "text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] border border-transparent hover:border-gray-800/40"
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </NavLink>
    </li>
  ));

  return (
    <nav className="bg-[#0B0F19]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-800/60 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo with Premium Cyber Neon Glow Overlay */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-black tracking-tight text-white active:scale-95 block group">
              <span className="group-hover:text-emerald-400 transition-colors duration-300">Book</span>
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-transparent bg-clip-text font-extrabold drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]">Vibe</span>
            </Link>
          </div>

          {/* Central Active Links Panel (Desktop Layout) */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <ul className="flex items-center gap-3">
              {links}
            </ul>
          </div>

          {/* Premium High-Gloss Inline Tailwind Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {!user ? (
              <>
                <button 
                  onClick={() => setUser({ name: "User" })}
                  className="px-6 py-2.5 text-sm font-extrabold text-emerald-400 bg-transparent hover:bg-emerald-500/10 rounded-xl transition-all duration-300 border-2 border-emerald-500/40 hover:border-emerald-400 active:scale-95 cursor-pointer shadow-sm shadow-emerald-500/5"
                >
                  Sign In
                </button>
                <button 
                  className="px-6 py-2.5 text-sm font-extrabold text-[#070A12] bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 hover:brightness-110 rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-black shadow-md shadow-emerald-500/30">
                  U
                </div>
                <button 
                  onClick={() => setUser(null)} 
                  className="px-4 py-2 text-xs font-bold text-rose-400 bg-rose-950/30 hover:bg-rose-900/40 border border-rose-900/50 rounded-lg transition-all active:scale-95 cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>

          {/* Fully Responsive Mobile Menu Button Selector */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 rounded-xl text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 transition-all duration-300 focus:outline-none"
            >
              <svg className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Advanced Animated Mobile Drawer Accordion Layout Panel */}
      <div className={`lg:hidden border-t border-gray-800 bg-[#0B0F19] transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[380px] opacity-100 py-6 px-6 space-y-4 shadow-2xl" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col gap-2">
          {links}
        </ul>
        <div className="pt-4 border-t border-gray-800/80 flex flex-col gap-3">
          {!user ? (
            <>
              <button onClick={() => { setUser({ name: 'User' }); setIsOpen(false); }} className="w-full py-3 text-emerald-400 bg-transparent border-2 border-emerald-500/30 rounded-xl font-bold transition-all active:scale-95">Sign In</button>
              <button className="w-full py-3 text-[#070A12] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl font-bold shadow-md transition-all active:scale-95">Sign Up</button>
            </>
          ) : (
            <div className="flex items-center justify-between bg-gray-900/40 border border-gray-800 p-3 rounded-xl">
              <span className="text-sm font-bold text-gray-300">Active Profile</span>
              <button onClick={() => { setUser(null); setIsOpen(false); }} className="px-3 py-1.5 text-xs font-bold text-white bg-rose-600 rounded-lg">Log Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;