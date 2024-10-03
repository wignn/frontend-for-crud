"use client";

import { useState, useEffect } from "react";
import FeatureList from "@/app/components/Landing/FeatureList";
import Contact from "@/app/components/Landing/contact";
import Hero from "@/app/components/Landing/Hero";
import Navbar from "@/app/components/Landing/Navbar";
import BookList from "@/app/components/Book/BookList";
import { fetchBooks } from "@/lib/action";

export default function Landing() {
  const [books, setBooks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getBooks = async () => {
    const { books, error } = await fetchBooks();
    if (error) {
      setError(error);
    } else {
      setBooks(books);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

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

  const feature = [
    {
      title: "Post",
      href: "/post",
      description: "Create and share posts with ease.",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      description: "Monitor your activity and statistics.",
    },
    {
      title: "Profile",
      href: "/profile",
      description: "Manage and customize your profile.",
    },
    {
      title: "Message",
      href: "/GlobalMsg",
      description: "Connect with others through messages.",
    },
    { title: "Admin Dashboard", href: "/admin", description: "Only admin" },
  ];



  return (
    <div
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Hero />
      <FeatureList className={"bg-gray-900 "} features={feature} />
      <BookList
        books={books}
        timeAgo={timeAgo}
        truncateTitle={truncateTitle}
        className={"bg-gray-900 text-white text-center"}
      />
      <Contact />
    </div>
  );
}
