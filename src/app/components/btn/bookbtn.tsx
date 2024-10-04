"use client";

import axios from 'axios';
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import Link from "next/link";
import { bookMarkConect, deleteBookMark, getBookMark } from "@/lib/action";

export const Bookmark = ({ id }: { id: string }) => {
  const { data: session } = useSession(); 
  const [loading, setLoading] = useState(false);
  const [hasBookmark, setHasBookmark] = useState(false);

  const userId = session?.user?.id;

  useEffect(() => {
    const fetchBookmarkStatus = async () => {
      try {
        const result = await getBookMark(userId)
        const bookmarkExists = result.data.some((bookmark: any) => bookmark.book.id === id);
        setHasBookmark(bookmarkExists);
      } catch (error) {
        console.error("Error fetching bookmark status:", error);
      }
    };

    if (userId) {
      fetchBookmarkStatus();
    }
  }, [userId, id]);

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault(); 
    setLoading(true); 

    try {
      await bookMarkConect(userId, id)

      setHasBookmark(true); 
    } catch (error) {
      console.error("Error adding bookmark:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return <p>.</p>; 
  }

  if (hasBookmark) {
    return <p><IoBookmark/></p>; 
  }

  return (
    <button 
      onClick={handleClick}
      disabled={loading} 
      className="bg-transparent hover:bg-black text-white py-2 px-2 rounded-md transition duration-300"
    >
      {loading ? 'Adding...' : <IoBookmarkOutline size={30}/>}
    </button>
  );
};



export const ReadButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/view/${id}`}
      className="text-center md:text-base text-sm justify-center flex hover:to-blue-100"
    >
      <p>Read</p>
    </Link>
  );
};

export const AddBookmark = ({ bookId, onDelete, className }: { bookId: string; onDelete: any, className?: string }) => {
  const [loading, setLoading] = useState(false);
  const {data:session} = useSession()

  const handleAddBookmark = async () => {
    setLoading(true);
    try {
      await bookMarkConect(session?.user.id, bookId)
      onDelete();
    } catch (error) {
      console.error("Error adding bookmark:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-blue-500">Processing...</p>;
  }

  return (
    <button
      onClick={handleAddBookmark}
      className={`${className}`}
    >
      Add Bookmark
    </button>
  );
};

export const DeleteButton = ({ bookId, onDelete, className }: { bookId: string; onDelete: any; className?: string }) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession(); 

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteBookMark(session?.user?.id, bookId)
      onDelete();
    } catch (error) {
      console.error("Error deleting bookmark:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className={`${className}`} onClick={handleDelete} disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};
