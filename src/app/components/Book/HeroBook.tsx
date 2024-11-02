import { useState, useEffect } from "react";
import Image from "next/image";
import ChaptersPage from "./chapter";
import { FaBell, FaBookmark } from "react-icons/fa";
import { bookMarkConect, deleteBookMark, getBookMark } from "@/lib/action";

interface TagsProps {
  bookId: string;
  userId: number | null;
  cover: string;
  description: string;
  title: string;
  author: string;
  createdAt: string;
  genre: { id: string; name: string }[];
  chapters: { id: string; title: string; createdAt: string }[];
}

const Hero: React.FC<TagsProps> = ({
  bookId,
  userId,
  cover,
  description,
  title,
  author,
  createdAt,
  genre,
  chapters,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const MAX_LENGTH = 100;

  const toggleDescription = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    const fetchBookMark = async () => {
      try {
        const response = await getBookMark(userId);
        const bookMarked = response.data;
        setIsBookmarked(
          bookMarked.some((bookmark: { bookId: string }) => bookmark.bookId === bookId)
        );
      } catch (error) {
        console.error("Failed to fetch bookmark", error);
      }
    };

    if (userId !== null) {
      fetchBookMark();
    }
  }, [userId, bookId]);

  const handleBookmarkToggle = async () => {
    setIsBookmarked((prev) => !prev);

    try {
      if (isBookmarked) {
        if (userId !== null) {
          await deleteBookMark(userId, bookId);
        }
      } else {
        await bookMarkConect(userId, bookId);
      }
    } catch (error) {
      console.error("Failed to toggle bookmark", error);
      setIsBookmarked((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-4 sm:p-8 space-y-6 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/3 h-1/2 bg-opacity-20 bg-black backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-6">
        <Image
          src={cover}
          alt="Cover"
          layout="responsive"
          width={400}
          height={600}
          className="rounded-lg object-cover shadow-lg"
        />
        {userId && (
          <div className="justify-center flex my-5 space-x-4">
            <button
              onClick={handleBookmarkToggle}
              className={`inline-block items-center gap-2 text-gray-400 hover:text-green-500 transition-all transform ${
                isBookmarked ? "scale-110 text-green-500" : "scale-100"
              }`}
            >
              <FaBookmark size={25} />
            </button>
            <button className="inline-block items-center gap-2 text-gray-400 hover:text-green-500 transition-all">
              <FaBell size={25} />
            </button>
          </div>
        )}
        <button className="w-full mt-4 py-2 px-4 text-white bg-green-600 hover:bg-green-500 rounded-lg transition-all">
          Read
        </button>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl sm:text-3xl font-bold">{title}</h1>
        </div>

        <div className="flex flex-wrap justify-between text-gray-300 text-sm sm:text-base">
          <span className="font-semibold">{author}</span>
          <span>{createdAt}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {genre.map((tag) => (
            <span
              key={tag.id}
              className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
          <p>
            {isExpanded
              ? description
              : description.slice(0, MAX_LENGTH) + "..."}
          </p>
          <button
            onClick={toggleDescription}
            className="mt-2 text-green-500 hover:underline"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>

        <ChaptersPage chapters={chapters} bookId={bookId} />
      </div>
    </div>
  );
};

export default Hero;
