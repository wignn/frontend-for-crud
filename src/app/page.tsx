import FeatureList from "@/app/components/Landing/FeatureList";
import Hero from "@/app/components/Landing/Hero";
import Navbar from "@/app/components/Landing/Navbar";
import BookList from "@/app/components/Book/BookList";
import { fetchBooks, getProfile } from "@/lib/action";
import Footer from "@/app/components/Landing/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Landing() {
  const fetchedBooks = await fetchBooks();
  const books = fetchedBooks.books;
let user

  const session = await getServerSession(authOptions);
  if(session) {
    user = await getProfile(session?.user.id);
  }


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
    {
      title: "Create Book",
      href: "/admin",
      description: "Create books and chapters.",
    },
    {
      title: "Bookmark",
      href: "/bookmark",
      description: "Add bookmarks to books.",
    },
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
      className="text-white"
    >
      <Navbar user={user}/>
      <div className="bg-gray-900 bg-opacity-60 min-h-screen">
        <Hero />
        <div className="">
          <BookList
            text="Latest"
            books={books}
            className="bg-gray-800 text-white text-center rounded-lg shadow-lg p-8"
          />
        </div>
        <div className="">
          <FeatureList
            className="bg-gray-800 text-white text-center rounded-lg shadow-lg p-8"
            features={feature}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
