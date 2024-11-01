"use client";

import { fetchBooks } from "@/lib/action";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [books, setBooks] = useState<{ id: string; title: string; description: string; coverImage: string; }[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetchBooks();
        const data = response.books.slice(0, 3); 
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch book data:", error);
      }
    };

    fetchBook();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b text-white">
      <section className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative">
        <h1 className="text-xl md:text-2xl font-bold mb-6 drop-shadow-lg">
          Selami Dunia Fantasi Tanpa Batas
        </h1>
        <p className="text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent md:text-xl mb-6">
  next.js + express
</p>

        <Link
          href="#explore"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg md:text-base mb-6 hover:bg-blue-700 transition"
        >
          Jelajahi Sekarang
        </Link>
      </section>

      <section id="explore" className="py-16 px-6 bg-gray-900">
        <h2 className="text-lg md:text-xl font-bold text-center mb-12 text-white">
          Temukan Cerita yang Tepat untuk Anda
        </h2>
        <div className="text-base grid md:grid-cols-3 grid-cols-2 gap-8">
          <Feature
            title="Fantasi dan Petualangan"
            description="Telusuri dunia sihir, pedang, dan makhluk mitos dalam novel fantasi yang mendebarkan."
            icon="https://files.edgestore.dev/93ti9i3vqygrxg8l/myPublicImage/_public/3c56e360-0a66-460d-8019-a82d64bf75e1.png"
          />
          <Feature
            title="Romansa dan Drama"
            description="Cerita-cerita romantis yang akan membuat hatimu berdebar, dengan drama penuh emosi."
            icon="https://files.edgestore.dev/93ti9i3vqygrxg8l/myPublicImage/_public/9da65fe9-2b72-488b-9eb1-06678897d737.png"
          />
          <Feature
            title="Fiksi Ilmiah"
            description="Menjelajahi masa depan, teknologi canggih, dan dunia lain dengan cerita fiksi ilmiah."
            icon="https://files.edgestore.dev/93ti9i3vqygrxg8l/myPublicImage/_public/1a4ec192-9b21-4418-8b96-749ad41f5ddb.jpg"
          />
        </div>
      </section>
      
      <section className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Novel Terpopuler
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {books.length > 0 ? (
            books.map((book) => (
              <Novel
                key={book.id}
                title={book.title}
                description={book.description}
                cover={book.coverImage}
              />
            ))
          ) : (
            <p className="text-center text-white">Sedang memuat buku...</p>
          )}
        </div>
      </section>
    </div>
  );
};

function Feature({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-full shadow-lg bg-white flex items-center justify-center">
        <img src={icon} alt={title} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-base text-gray-300">{description}</p>
    </div>
  );
}

function Novel({
  title,
  description,
  cover,
}: {
  title: string;
  description: string;
  cover: string;
}) {
  return (
    <div className="flex flex-col items-center text-center bg-gray-700 p-4 rounded-lg shadow-md">
      <img
        src={cover}
        alt={title}
        className="w-full h-72 object-cover rounded-lg mb-4"
      />
      <h3 className="text-base font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}

export default Hero;
