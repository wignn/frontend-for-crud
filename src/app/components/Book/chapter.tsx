import { useState } from "react";

interface Chapter {
  id: string;
  title: string;
  createdAt: string;
}

interface ChaptersPageProps {
  chapters: Chapter[];
}

const ChaptersPage: React.FC<ChaptersPageProps> = ({ chapters }) => {
  return (
    <div className="flex justify-center items-start">
      <div className="w-full bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          {chapters.length === 0 ? "No chapter" : `${chapters.length} Chapters`}
        </h3>

        <ul className="space-y-4">
          {chapters.map((chapter) => (
            <li
              key={chapter.id}
              className="border-b border-gray-600 pb-4 last:border-none"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">
                  {chapter.title}
                </h2>
                <span className="text-sm text-gray-400">
                  {chapter.createdAt}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChaptersPage;
