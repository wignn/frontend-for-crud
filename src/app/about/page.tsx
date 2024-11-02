import { About } from "../components/About";
import { getServerSession } from 'next-auth';
import Navbar from "../components/Landing/Navbar";
import { authOptions } from '@/lib/auth';
import { getProfile } from "@/lib/action";

export default async function AboutPage() {
    const session = await getServerSession(authOptions);
    const user = await getProfile(session?.user.id);
    return (
        <div style={{
            backgroundImage: `url('/bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}>
              <Navbar user={user}/>
        <About/>

        </div>

    )
}