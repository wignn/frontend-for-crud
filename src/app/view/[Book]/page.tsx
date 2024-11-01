"use client";

import React from "react";
import Hero from "../../components/Book/HeroBook";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "@/app/components/Landing/Navbar";
import Loading from "@/app/components/comp/Loading";
import { getBookById } from "@/lib/action";

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  synopsis: string;
  publishedAt: string;
  status: string;
  genre: { id: string; name: string }[];
  chapters?: { id: string; title: string }[];
}

export default function Books() {
  const pathname = usePathname();
  const bookId = pathname.split("/").pop();
  const [book, setBook] = React.useState<Book | null>(null);
  const { data: session } = useSession();
  const [loading, setLoading] = React.useState(true);

  async function fetchBook() {
    try {
      setLoading(true);
      const response = await getBookById(String(bookId));
      setBook(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchBook();
  }, [session?.user.name, bookId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-gray-700 text-white p-2 md:p-8">
        {book && (
          <Hero
            cover={book.coverImage}
            description={book.synopsis}
            title={book.title}
            author={book.author}
            createdAt={book.publishedAt}
            genre={book.genre}
            chapters={book.chapters}
          />
        )}
      </div>
    </div>
  );
}
