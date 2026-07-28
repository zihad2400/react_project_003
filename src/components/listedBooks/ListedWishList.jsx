import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../ui/BookCard";

const ListedWishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  console.log(wishList, "bookContext");

  const [filteredWishList, setFilteredWishList] = useState(wishList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages
        );
        console.log(sortedData);
        setFilteredWishList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
        console.log(sortedData);
        setFilteredWishList(sortedData);
      }
    } else {
      // Fallback update dynamically if wishList changes hooks trigger
      setFilteredWishList(wishList);
    }
  }, [sortingType, wishList]);

  // Premium Cyber Glassmorphic Empty State Viewport for Wishlist
  if (filteredWishList.length === 0) {
    return (
      <div className="w-full min-h-screen bg-slate-950 rounded-2xl text-slate-100 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-4xl h-[40vh] bg-slate-900/50 rounded-2xl backdrop-blur-md border border-slate-850 rounded-3xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden my-6">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none"></div>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-700 mb-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.317a4.5 4.5 0 00-6.364 0z" />
          </svg>
          
          <h2 className="font-extrabold text-2xl text-slate-400 tracking-tight">
            No Wish List Data Found
          </h2>
          <p className="text-sm text-slate-500 max-w-xs mt-1">
            Save items you want to read later. Your wishlist items will display right here inside the grid.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-950 rounded-2xl text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto relative py-8 px-4 sm:px-6 rounded-3xl bg-slate-950 border border-slate-900 shadow-2xl overflow-hidden">
        
        {/* Background Subtle Ambient Aura Glow Inside Container Grid */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        {/* Cyber Responsive Card Grid Symmetry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredWishList.map((book, ind) => (
            <BookCard key={ind} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedWishList;