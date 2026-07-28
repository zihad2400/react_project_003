import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  getAllReadListFromLocalDB,
} from "../utils/localDB";

export const BookContext = createContext(null);

const BookProvider = ({ children }) => {
  // Defensive array handling: ensures readList is ALWAYS an array to avoid page crash
  const [readList, setReadList] = useState(() => {
    const savedData = getAllReadListFromLocalDB();
    return Array.isArray(savedData) ? savedData : [];
  });
  
  const [wishList, setWishList] = useState([]);

  // Logging outputs for transparent developer tracking
  console.log("Current Context Read List Array State Structure:", readList);

  const handleMarkAsRead = (currentBook) => {
    // 100% Strict input validation check layer
    if (!currentBook || !currentBook.bookId) return;

    // Check if data array safely handles evaluation rules
    const safeReadList = Array.isArray(readList) ? readList : [];
    const isExistBook = safeReadList.find(
      (book) => book?.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      // LocalDB side effect update parameters action execute
      addReadListToLocalDB(currentBook);
      setReadList([...safeReadList, currentBook]);
      toast.success(`${currentBook.bookName || "Book"} is added to read list`);
    }

    console.log("Processed Action Result (Read List Stack):", currentBook, readList);
  };

  const handleWishList = (currentBook) => {
    if (!currentBook || !currentBook.bookId) return;

    const safeReadList = Array.isArray(readList) ? readList : [];
    const safeWishList = Array.isArray(wishList) ? wishList : [];

    const isExistInReadList = safeReadList.find(
      (book) => book?.bookId === currentBook.bookId
    );

    if (isExistInReadList) {
      toast.error("This book is already in read list");
      return;
    }

    const isExistBook = safeWishList.find(
      (book) => book?.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setWishList([...safeWishList, currentBook]);
      toast.success(`${currentBook.bookName || "Book"} is added to wish list`);
    }

    console.log("Processed Action Result (Wish List Stack):", currentBook, readList);
  };

  // Wrapped Data Export Variables Matrix 
  const contextData = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return (
    <BookContext.Provider value={contextData}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;