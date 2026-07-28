import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";

const Books = () => {
  const [sortingType, setSortingType] = useState("");
  
  // Safely consume BookContext if needed for current/future list management checks
  const context = useContext(BookContext);
  const readList = context?.readList || [];
  const wishList = context?.wishList || [];

  console.log("Active List State Matrix - Sort Type:", sortingType);

  return (
    <div className="container mx-auto my-8 px-4 max-w-6xl">
      
      {/* Dynamic Main Header Title Wrapper */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">
          Listed Dashboard
        </h1>
        <p className="text-xs text-gray-400 mt-1 font-semibold">
          Manage your curated book collection lists seamlessly
        </p>
      </div>

      {/* Modern Safe Dropdown Trigger Control Board Component */}
      <div className="flex justify-center mb-8">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div 
            tabIndex={0} 
            role="button" 
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Sort By : {sortingType ? sortingType.toUpperCase() : "Select Metric"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <ul
            tabIndex={0}
            className="dropdown-content menu mt-2 p-1.5 shadow-xl bg-white border border-gray-100 rounded-xl z-[100] w-48 text-sm"
          >
            <li>
              <button 
                type="button"
                className="font-bold text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg py-2"
                onClick={() => {
                  setSortingType("pages");
                  document.activeElement?.blur(); // Safely dismisses dropdown popup frame focus
                }}
              >
                📄 Total Pages
              </button>
            </li>
            <li>
              <button 
                type="button"
                className="font-bold text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg py-2"
                onClick={() => {
                  setSortingType("rating");
                  document.activeElement?.blur();
                }}
              >
                ⭐ Top Rating
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Styled Tabs TabList Content Node Structure System */}
      <div className="bg-blend-darken border border-gray-100 rounded-2xl p-4 md:p-6 shadow-sm">
        <Tabs className="custom-react-tabs">
          <TabList className="flex border-b border-gray-100 mb-6 gap-2">
            <Tab className="px-5 py-2 text-sm font-extrabold text-gray-400 border-b-2 border-transparent cursor-pointer outline-none transition-all hover:text-gray-700 select-none [&.react-tabs\_\_tab\-\-selected]:text-emerald-600 [&.react-tabs\_\_tab\-\-selected]:border-emerald-500">
              Read List ({readList.length})
            </Tab>
            <Tab className="px-5 py-2 text-sm font-extrabold text-gray-400 border-b-2 border-transparent cursor-pointer outline-none transition-all hover:text-gray-700 select-none [&.react-tabs\_\_tab\-\-selected]:text-emerald-600 [&.react-tabs\_\_tab\-\-selected]:border-emerald-500">
              Wish List ({wishList.length})
            </Tab>
          </TabList>

          <TabPanel className="focus:outline-none">
            <ListedReadList sortingType={sortingType} />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <ListedWishList sortingType={sortingType} />
          </TabPanel>
        </Tabs>
      </div>

    </div>
  );
};

export default Books;