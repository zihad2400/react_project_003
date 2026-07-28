import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom"; // Fixed: imported from react-router-dom
import { BookContext } from "../../context/BookContext";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  const books = useLoaderData();

  // Defensive array checks to completely prevent white screen freeze
  const safeBooks = Array.isArray(books) ? books : [];
  const expectedBook = safeBooks.find(
    (book) => book?.bookId === Number(bookParamsId)
  );

  // If data is loading or not found, show a beautiful clean loading shimmer skeleton instead of blank screen
  if (!expectedBook) {
    return (
      <div className="container mx-auto my-12 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-500 font-medium">Loading premium book metadata content...</p>
        </div>
      </div>
    );
  }

  // Safe destructuring fallbacks
  const {
    bookName = "Untitled Masterpiece",
    author = "Unknown Author",
    image = "/placeholder-book.jpg",
    review = "No review available for this masterpiece yet.",
    totalPages = "N/A",
    rating = "0.0",
    category = "General Literature",
    tags = [],
    publisher = "Independent Publisher",
    yearOfPublishing = "N/A",
  } = expectedBook;

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm">
        
        {/* Book Preview Cover Grid Layout Frame */}
        <figure className="w-full flex items-center justify-center bg-gray-50 rounded-2xl p-8 border border-gray-100/50 min-h-[400px] md:min-h-[500px]">
          <img 
            src={image} 
            alt={bookName} 
            className="max-h-[450px] w-auto object-contain rounded-xl shadow-xl hover:scale-[1.02] transition-transform duration-300" 
          />
        </figure>

        {/* Content Board Details View Section */}
        <div className="flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight leading-tight">
              {bookName}
            </h1>
            <p className="text-md font-bold text-gray-500">
              By : <span className="text-gray-700 font-extrabold">{author}</span>
            </p>
            <div className="py-2.5 my-2 border-y border-gray-100 text-gray-600 font-extrabold text-sm uppercase tracking-wider text-emerald-600">
              {category}
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm pt-1">
              <span className="font-extrabold text-gray-800">Review: </span>{review}
            </p>

            {/* Premium Hashtag Array Loop Wrapper */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-sm font-black text-gray-800 mr-2">Tag</span>
              {tags.map((tag, ind) => (
                <span
                  key={ind}
                  className="px-3 py-1 text-xs font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Core Metadata Specifications Metrics Table Structure */}
          <div className="border-t border-gray-100 pt-4 space-y-3 text-sm">
            <div className="grid grid-cols-3 max-w-sm">
              <span className="text-gray-500 font-semibold">Number of pages:</span>
              <span className="text-gray-800 font-extrabold col-span-2 pl-4">{totalPages}</span>
            </div>
            <div className="grid grid-cols-3 max-w-sm">
              <span className="text-gray-500 font-semibold">Publisher:</span>
              <span className="text-gray-800 font-extrabold col-span-2 pl-4">{publisher}</span>
            </div>
            <div className="grid grid-cols-3 max-w-sm">
              <span className="text-gray-500 font-semibold">Year of Publishing:</span>
              <span className="text-gray-800 font-extrabold col-span-2 pl-4">{yearOfPublishing}</span>
            </div>
            <div className="grid grid-cols-3 max-w-sm">
              <span className="text-gray-500 font-semibold">Rating:</span>
              <span className="text-amber-600 font-black col-span-2 pl-4 flex items-center gap-1">
                ⭐ {rating}
              </span>
            </div>
          </div>

          {/* Micro-Interaction CTA Action Buttons Panel */}
          <div className="flex items-center gap-4 pt-4">
            <button
              className="px-6 py-3 border-2 border-gray-200 hover:border-emerald-500 rounded-xl font-bold text-sm text-gray-700 hover:text-emerald-600 bg-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-95"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>
            <button
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-md hover:shadow-emerald-500/10 active:scale-95"
              onClick={() => handleWishList(expectedBook)}
            >
              Add to Wishlist
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;