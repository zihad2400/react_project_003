import React, { use } from "react";
import { Link } from "react-router-dom"; // Ultimate routing node integration

// Fetching block outside component with React 19 promise pattern
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books, "books ");

  return (
    <div className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-slate-950 min-h-screen py-8">
      
      {/* Background Subtle Ambient Aura Glow for Grid Structure */}
      <div className="absolute top-[20%] left-[-20%] w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-20%] w-[500px] h-[500px] bg-teal-500/[0.05] rounded-full blur-[160px] pointer-events-none"></div>

      {/* Main Section Heading with Premium Neon Gradient */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-black text-white tracking-tight sm:text-5xl">
          Trending{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 font-black drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Books
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full opacity-70"></div>
      </div>

      {/* Fully Responsive Cyber Optimized Grid Framework */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {books.map((book, ind) => {
          // 1. Safe variable destructuring with defensive fallbacks to prevent crash
          const bookId = book.bookId || ind;
          const bookName = book.bookName || "Untitled Book";
          const author = book.author || "Unknown Author";
          const image = book.image || "/placeholder-book.jpg";
          const rating = book.rating || "0.0";
          const totalPages = book.totalPages || "N/A";
          const category = book.category || "Literature";
          const tags = Array.isArray(book.tags) ? book.tags : [];

          return (
            <Link 
              key={bookId}
              to={`/bookDetails/${bookId}`}
              className="group relative block rounded-2xl bg-slate-900/60 backdrop-blur-md p-5 border border-slate-800/80 hover:border-emerald-500/50 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 ease-out hover:-translate-y-2 overflow-hidden flex flex-col justify-between transform-gpu active:scale-[0.98]"
            >
              {/* Dynamic Cyber Ambient Glowing Matrix on Card Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

              <div className="relative z-10">
                {/* Book Cover Container Grid Frame */}
                <div className="relative w-full aspect-[4/5] bg-slate-950/60 rounded-xl p-6 flex items-center justify-center overflow-hidden border border-slate-800 shadow-inner group-hover:bg-emerald-950/20 transition-colors duration-300">
                  
                  {/* Neon Glow Circle Behind Image on Hover */}
                  <div className="absolute w-[70%] h-[70%] bg-emerald-500/5 blur-xl rounded-full scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10" />

                  <img 
                    src={image} 
                    alt={bookName} 
                    className="h-full object-contain rounded-lg shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 relative z-20"
                    onError={(e) => {
                      e.target.src = "/placeholder-book.jpg";
                    }}
                  />

                  {/* Premium Floating Category Badge Tag */}
                  <span className="absolute top-3 right-3 z-30 px-2.5 py-1 text-[10px] font-black tracking-widest text-emerald-400 uppercase bg-emerald-950/80 backdrop-blur-md rounded-md shadow-md border border-emerald-500/30">
                    {category}
                  </span>
                </div>

                {/* Tags Array Loop Section */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 rounded-md shadow-2xs group-hover:bg-emerald-900/30 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Title and Author Typography Blocks with Interaction Color Sync */}
                <div className="mt-4 space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight line-clamp-1 group-hover:text-emerald-400 transition-colors duration-200">
                    {bookName}
                  </h3>
                  <p className="text-xs font-bold text-slate-500">
                    By <span className="text-slate-300 group-hover:text-slate-100 transition-colors duration-200">{author}</span>
                  </p>
                </div>
              </div>

              {/* Footer Metrics Component Section with Custom Icons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-400 relative z-10">
                <div className="flex items-center gap-1.5 group-hover:text-slate-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                  </svg>
                  <span className="text-slate-200 font-black">{totalPages}</span> <span className="text-slate-500 font-semibold text-[11px]">Pages</span>
                </div>
                
                <div className="flex items-center gap-1 bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-900/30 shadow-2xs group-hover:bg-amber-950/80 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-400 fill-amber-400 group-hover:animate-bounce" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-amber-400 font-black text-xs">{rating}</span>
                </div>
              </div>

            </Link>
          );
        })}
      </div>
      
    </div>
  );
};

export default AllBooks;