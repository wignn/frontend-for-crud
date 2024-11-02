"use client";
import { useEffect, useState } from "react";
import PhotoCard from "../../components/profile/settingProfile";
import { useSession } from "next-auth/react";
import Loading from "@/app/components/comp/Loading";

import { getProfile } from "@/lib/action";
import { Bg } from "@/app/components/comp/bg";

interface User {
  id: number;
  name: string;
  email: string;
  profile: { avatar: string; sampul: string };
}

export default function ProfileSetting() {
  const { data: session } = useSession();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) {
      const fetchUserData = async () => {
        try {
          const result = await getProfile(session?.user?.id);
          setUser(result);
        } catch (err) {
          console.error("Error fetching user data:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [session]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className=" min-h-screen text-white"
    ><Bg/>
      <div className=" gap-6 w-full h-full">
        {user && (
          <PhotoCard
            key={user.id}
            id={user.id}
            name={user.name}
            photoURL={user.profile.avatar}
            coverURL={user.profile.sampul}
          />
        )}
      </div>
    </div>
  );
}
