import Link from "next/link";

interface ChaptersPageProps {
  chapters: { id: string; title: string; createdAt: string }[];
  bookId: string;
}

const ChaptersPage: React.FC<ChaptersPageProps> = ({ chapters, bookId }) => {
  return (
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">
          {chapters.length === 0 ? "No Chapters Available" : `${chapters.length} Chapters`}
        </h3>

        <ul className="space-y-4">
          {chapters.map((chapter, index) => (
            <li key={chapter.id} className="border-b border-gray-700 pb-4 last:border-none">
              <Link href={`/view/${bookId}/${chapter.id}`}>
                <div className="bg-slate-700 hover:bg-slate-600 transition duration-200 rounded-lg p-4 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Chapter {index + 1}</p>
                      <h2 className="text-lg font-semibold text-white">{chapter.title}</h2>
                    </div>
                    <p className="text-sm text-gray-400">
                      {new Date(chapter.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {chapters.length === 0 && (
          <p className="text-gray-400 text-center mt-6">
            Belum ada chapter untuk buku ini.
          </p>
        )}
      </div>
  );
};

export default ChaptersPage;
