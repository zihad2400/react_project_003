import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from "react-router";

// Layout wrapper loading component structure
import MainLayout from "../layout/MainLayout";

// Lazy loading core pages components for absolute performance boost
const Homepage = lazy(() => import("../pages/homepage/Homepage"));
const Books = lazy(() => import("../pages/books/Books"));
const BookDetails = lazy(() => import("../pages/bookDetails/BookDetails"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));

// Global fallback screen for seamless route transition
const LoadingSpinner = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
    <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-gray-500 font-semibold tracking-wide text-sm animate-pulse">Loading Book Vibe...</p>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: (
      <Suspense fallback={<div>Loading Error View...</div>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/books",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Books />
          </Suspense>
        ),
      },
      {
        path: "/pages-to-read",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/bookDetails/:bookId",
        Component: (props) => (
          <Suspense fallback={<LoadingSpinner />}>
            <BookDetails {...props} />
          </Suspense>
        ),
        // Premium optimization rule: context fetch dynamic loader structure wrapper
        loader: async () => {
          const res = await fetch("/booksData.json");
          if (!res.ok) throw new Error("Failed to load book parameters data.");
          return res.json();
        },
      },
    ],
  },
]);