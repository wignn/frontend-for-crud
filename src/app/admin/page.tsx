import BooksEdite from "@/app/components/admin/Dasboard";
import SideBar from "@/app/components/admin/SideBar";
import { Bg } from "../components/dist/bg";

interface SearchParams {
  query?: string;
}

const Page = async ({ searchParams }: { searchParams?: SearchParams }) => {
  const query = searchParams?.query || "";
  // console.log(`Query: ${query}`);

  return (
    <>
    <Bg/>
      <SideBar>
        <BooksEdite query={query} />
      </SideBar>
    </>
  );
};

export default Page;
