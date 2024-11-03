"use client";

import { GetDashboard } from "@/lib/action";
import Search from "../comp/searchBook";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import BookList from "../Book/BookList"; 
import GenreSelector from "../Book/genreSelect"; 

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedAt: Date;
  coverImage?: string;
  status: string;
}

interface DashboardProps {
  query: string;
}

const Dashboard: React.FC<DashboardProps> = ({ query }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [genre, setGenre] = useState("");

  const fetchBooks = async () => {
    const fetchedBooks: Book[] = await GetDashboard(query, genre);
    setBooks(fetchedBooks);
  };

  useEffect(() => {
    fetchBooks(); 
  }, [query, genre]);

  const totalBooks = books.length;
  const borrowedBooks = books.filter((book) => book.status === "Drop").length;
  const ongoing = totalBooks - borrowedBooks;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navbar />
      <div className="p-4 sm:p-8">
        <header className="flex justify-between items-center bg-gray-800 p-4 sm:p-6 rounded-md shadow-lg mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Dashboard
          </h1>
          <Search />
        </header>
        
        <GenreSelector selectedGenre={genre} onSelect={setGenre} /> 
{/* 
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-800 p-6 rounded-md shadow-md text-center">
            <h2 className="text-lg font-bold mb-2 text-gray-200">
              Total Books
            </h2>
            <p className="text-3xl font-semibold text-white">
              {totalBooks}
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md shadow-md text-center">
            <h2 className="text-lg font-bold mb-2 text-gray-200">
              Borrowed Books
            </h2>
            <p className="text-3xl font-semibold text-white">
              {borrowedBooks}
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md shadow-md text-center">
            <h2 className="text-lg font-bold mb-2 text-gray-200">
              Available Books
            </h2>
            <p className="text-3xl font-semibold text-white">
              {ongoing}
            </p>
          </div>
        </div> */}

        <div className="mt-6">
          <BookList text={" "} books={books} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
