"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Loading from "@/app/components/comp/Loading";
import BookmarkList from "@/app/components/Book/bookmark";
import { getBookMark } from "@/lib/action";

interface Bookmark {
  id: string;
  book: {
    id: string;
    title: string;
    author: string;
    publishedAt: string;
    coverImage: string;
  };
}



const BookMark: React.FC = () => {
  const { data: session, status } = useSession();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookmarks = async () => {
    setLoading(true);
    try {
      const response = await getBookMark(session?.user?.id);
      console.log(response)
      setBookmarks(response.data);
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (status !== "loading" && session?.user?.id) {
      fetchBookmarks();
    }
  }, [session, status]);

  const handleDelete = () => {
    fetchBookmarks(); 
  };

  if (loading) {
    return <div className="w-full h-full"><Loading /></div>;
  }

  if (bookmarks.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <p className="text-lg text-gray-300">No bookmarks found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-10" style={{
      backgroundImage: `url('/bg.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}>
      <div className="w-11/12 sm:w-4/5 md:py-6 md:px-8 py-4 px-4 rounded-lg shadow-lg">
        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-center text-white">
          Bookmarks
        </h1>
        <BookmarkList bookmarks={bookmarks} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default BookMark;
