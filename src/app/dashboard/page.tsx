import { getServerSession } from "next-auth";
import Dashboard from "../components/Landing/dashboard";
import Navbar from "../components/Landing/Navbar";
import { authOptions } from "@/lib/auth";
import { getProfile } from "@/lib/action";

interface SearchParams {
  query?: string;
}

const Dash = async ({ searchParams }: { searchParams?: SearchParams }) => {
  const query = searchParams?.query || "";
  const session = await getServerSession(authOptions);
  const user = session?.user.id ? await getProfile(session.user.id) : null;
  return (
    <div>
      <Navbar user={user} />
      <Dashboard query={query}  />
    </div>
  );
};

export default Dash;
