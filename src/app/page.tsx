"use client";

import FeatureList from "@/app/components/Landing/FeatureList";
import Hero from "@/app/components/Landing/Hero";
import Navbar from "@/app/components/Landing/Navbar";
import BookList from "@/app/components/Book/BookList";
import { fetchBooks } from "@/lib/action";
import Footer from "./components/Landing/Footer";



export default async function Landing() {
    const { books } = await fetchBooks();

  

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
      title: "Dashboard",
      href: "/dashboard",
      description: "Monitor your activity and statistics.",
    },
    {
      title: "Profile",
      href: "/profile",
      description: "Manage and customize your profile.",
    },
    { title: "create book", href: "/admin", description: "create book and chapter" },
    { title: "bookmark", href: "/bookmark", description: "add mark to book" },
  ];

  return (
    <div
      style={{
        backgroundImage: `url('https://files.edgestore.dev/93ti9i3vqygrxg8l/myPublicImage/_public/1a4ec192-9b21-4418-8b96-749ad41f5ddb.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Hero />
      <BookList
      text={"Latest"}
        books={books || []}
        timeAgo={timeAgo}
        truncateTitle={truncateTitle}
        className={"bg-gray-900 text-white text-center"}
      />
      <FeatureList className={"bg-gray-900 "} features={feature} />
      <Footer/>
    </div>
  );
}
