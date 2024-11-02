"use client";

import { ReadButton } from "@/app/components/btn/bookbtn";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedAt: Date;
  coverImage?: string;
}

interface BookListProps {
  books: Book[];
  className?: any;
  text: string;
}

const timeAgo = (date: string) => {
  const now = new Date();
  const updatedDate = new Date(date);
  const differenceInSeconds = Math.floor(
    (now.getTime() - updatedDate.getTime()) / 1000
  );

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(differenceInSeconds / seconds);
    if (interval > 1) return `${interval} ${unit}s ago`;
    if (interval === 1) return `1 ${unit} ago`;
  }
  return "just now";
};

const truncateTitle = (title: string, maxLength: number) => {
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
};

const BookList: React.FC<BookListProps> = ({ text, books, className }) => {
  return (
    <div className={`bg-gray-800 p-4 sm:p-6 rounded-md shadow-md ${className}`}>
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-200">
        {text}
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {books.map((book) => (
          <li key={book.id} className="flex flex-col justify-between px-2 py-4">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-48 md:h-72 object-cover rounded-md mb-4 shadow-sm"
            />
            <h3 className="text-md sm:text-lg font-semibold text-white">
              {truncateTitle(book.title, 20)} {/* Ubah panjang sesuai kebutuhan */}
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              {book.author}
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              Published At: {timeAgo(book.publishedAt.toString())}
            </p>
            <div className="mt-2 sm:mt-4 flex justify-center">
              <ReadButton id={book.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
