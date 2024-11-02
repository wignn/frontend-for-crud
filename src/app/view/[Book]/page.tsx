"use client";

import React, { useEffect } from "react";
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
  chapters: { id: string; title: string; createdAt: string }[];
}

export default function Books() {
  const pathname = usePathname();
  const bookId = pathname.split("/").pop();
  const [book, setBook] = React.useState<Book | null>(null);
  const [loading, setLoading] = React.useState(true);
  const { data: session } = useSession();

  async function fetchBook() {
    try {
      setLoading(true);
      console.log(bookId);
      const response = await getBookById(String(bookId));
      setBook(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBook();
  }, [bookId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-700 text-white p-2 md:p-8">
        {book && (
          <Hero
            bookId={book.id}
            userId={session?.user?.id || null}
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
